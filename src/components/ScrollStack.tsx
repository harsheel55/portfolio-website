import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  stackOffset?: number;
  scaleStep?: number;
  useWindowScroll?: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 500,
  stackOffset = 40,
  scaleStep = 0.05,
  useWindowScroll = false,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollY = useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop || 0);
    const windowHeight = window.innerHeight;

    cardsRef.current.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardTop = useWindowScroll ? rect.top + scrollY : card.offsetTop;
      
      // Calculate when card should start sticking
      const stickyPoint = windowHeight * 0.2; // Card sticks at 20% from top
      const cardScroll = scrollY - (cardTop - stickyPoint);
      
      // Calculate progress for this card (0 to 1)
      const progress = Math.max(0, Math.min(1, cardScroll / itemDistance));
      
      // Calculate how many cards are stacked on top
      let stackedCount = 0;
      for (let i = 0; i < index; i++) {
        const prevCard = cardsRef.current[i];
        const prevRect = prevCard.getBoundingClientRect();
        const prevCardTop = useWindowScroll ? prevRect.top + scrollY : prevCard.offsetTop;
        const prevCardScroll = scrollY - (prevCardTop - stickyPoint);
        const prevProgress = Math.max(0, Math.min(1, prevCardScroll / itemDistance));
        
        if (prevProgress > 0) {
          stackedCount++;
        }
      }
      
      // Position calculation
      let translateY = 0;
      let scale = 1;
      let zIndex = cardsRef.current.length - index;
      
      if (progress > 0) {
        // Card is in sticky position
        translateY = stickyPoint - rect.top;
        
        // Scale down based on how many cards are on top
        const cardsOnTop = cardsRef.current.length - index - 1;
        const nextCardProgress = index < cardsRef.current.length - 1 ? 
          (() => {
            const nextCard = cardsRef.current[index + 1];
            const nextRect = nextCard.getBoundingClientRect();
            const nextCardTop = useWindowScroll ? nextRect.top + scrollY : nextCard.offsetTop;
            const nextCardScroll = scrollY - (nextCardTop - stickyPoint);
            return Math.max(0, Math.min(1, nextCardScroll / itemDistance));
          })() : 0;
        
        // When next card comes, this card scales down and moves back
        scale = 1 - (nextCardProgress * scaleStep);
        translateY = translateY - (nextCardProgress * stackOffset);
        
      } else {
        // Card hasn't reached sticky point yet
        translateY = 0;
        scale = 1;
      }
      
      // Apply transforms
      card.style.transform = `translateY(${translateY}px) scale(${scale})`;
      card.style.zIndex = `${zIndex}`;
      card.style.transformOrigin = 'center top';
    });
  }, [itemDistance, stackOffset, scaleStep, useWindowScroll]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        updateCardTransforms();
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        updateCardTransforms();
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    ) as HTMLElement[];
    
    cardsRef.current = cards;

    cards.forEach((card, index) => {
      card.style.position = 'sticky';
      card.style.top = '20vh';
      card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transition = 'transform 0.1s ease-out';
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      cardsRef.current = [];
    };
  }, [itemDistance, stackOffset, scaleStep, useWindowScroll, setupLenis, updateCardTransforms]);

  return (
    <div
      className={`relative w-full ${useWindowScroll ? '' : 'h-full overflow-y-auto'} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="h-[100vh]" />
      </div>
    </div>
  );
};

export default ScrollStack;