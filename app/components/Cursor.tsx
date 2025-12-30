"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trailCount = 8; // Reduced from 12
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: 8 }, () => ({ x: 0, y: 0 }))
  );
  const rafId = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const trails = trailRefs.current.filter((trail): trail is HTMLDivElement => trail !== null);

    const move = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const animate = () => {
      // Instant cursor movement - no smoothing
      cursorPos.current.x = mousePos.current.x;
      cursorPos.current.y = mousePos.current.y;
      
      cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;

      // Trail animation with faster response
      trails.forEach((trail, index) => {
        const target = index === 0 ? cursorPos.current : trailPositions.current[index - 1];
        const spring = 0.3 - index * 0.02; // Increased from 0.15 to 0.3 for faster response
        
        trailPositions.current[index].x += (target.x - trailPositions.current[index].x) * spring;
        trailPositions.current[index].y += (target.y - trailPositions.current[index].y) * spring;
        
        trail.style.transform = `translate(${trailPositions.current[index].x}px, ${trailPositions.current[index].y}px) scale(${1 - index * 0.09})`;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    const down = () => {
      if (cursor) cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) scale(0.8)`;
    };
    
    const up = () => {
      if (cursor) cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) scale(1)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {[...Array(trailCount)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[9998] h-4 w-4 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            opacity: 1 - (i * 0.1),
          }}
        >
          <div 
            className="h-full w-full rounded-full bg-white/60 blur-sm"
            style={{
              boxShadow: `0 0 ${20 - i * 1.5}px rgba(255,255,255,${0.5 - i * 0.04})`,
            }}
          />
        </div>
      ))}
      
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="h-full w-full rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.5)]" />
      </div>
    </>
  );
}
