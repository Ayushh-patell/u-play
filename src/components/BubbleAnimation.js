import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BubbleAnimation = () => {
  const bubblesRef = useRef(null);

  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 10px and 50px
      const size = Math.random() * 40 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random horizontal position
      bubble.style.left = `${Math.random() * 100}%`;
      
      // Random animation duration between 4s and 8s
      const duration = Math.random() * 4 + 4;
      
      // Random delay
      const delay = Math.random() * 2;
      
      bubblesRef.current.appendChild(bubble);
      
      // GSAP animation
      gsap.fromTo(bubble, 
        {
          y: window.innerHeight + 50,
          opacity: 0,
          scale: 0,
          rotation: 0
        },
        {
          y: -100,
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: duration,
          delay: delay,
          ease: 'none',
          onComplete: () => {
            if (bubble.parentNode) {
              bubble.parentNode.removeChild(bubble);
            }
          }
        }
      );
      
      // Add floating movement
      gsap.to(bubble, {
        x: `+=${Math.random() * 100 - 50}`,
        duration: duration / 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    };

    // Create bubbles at intervals
    const bubbleInterval = setInterval(createBubble, 500);

    // Create initial burst of bubbles
    for (let i = 0; i < 10; i++) {
      setTimeout(createBubble, i * 200);
    }

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  return <div ref={bubblesRef} className="bubbles"></div>;
};

export default BubbleAnimation;