"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const down = () => {
      cursor.style.transform = `translate(${cursor.offsetLeft}px, ${cursor.offsetTop}px) scale(0.8)`;
    };
    
    const up = () => {
      cursor.style.transform = `translate(${cursor.offsetLeft}px, ${cursor.offsetTop}px) scale(1)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ mixBlendMode: 'difference' }}
    >
      <div className="h-full w-full rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.5)]" />
    </div>
  );
}
