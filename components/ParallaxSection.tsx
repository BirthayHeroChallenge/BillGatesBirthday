"use client";

import React, { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  reverse?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.1,
  direction = 'up',
  reverse = false,
  backgroundImage,
  overlay = false,
}: ParallaxSectionProps) {
  const { style } = useParallax({ speed, direction, reverse });

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            ...style,
            backgroundImage: `url('${backgroundImage}')`,
            transform: `${style.transform} scale(1.2)`, // Add extra scale to prevent gray edges
          }}
        />
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-black/30 z-10" />
      )}
      
      <div className={`relative ${backgroundImage ? 'z-20' : ''}`}>
        {children}
      </div>
    </section>
  );
}

export function ParallaxElement({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
  reverse = false,
}: Omit<ParallaxSectionProps, 'backgroundImage' | 'overlay'>) {
  const { style } = useParallax({ speed, direction, reverse });

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
