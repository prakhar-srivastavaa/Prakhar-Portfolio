"use client";

// Home.tsx
export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30 px-6 py-10 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1 text-sm text-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            Prakhar Srivastava — Full-Stack & ML
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-amber-100 md:text-5xl">
            Building immersive web experiences with code, motion, and AI.
          </h1>
          <p className="text-lg text-slate-200/80">
            Bangalore-based developer crafting performant products, automation, and ML-powered tools. I love shaping ideas into interactive experiences.
          </p>
          <div className="grid gap-3 text-sm font-semibold text-slate-100/90 sm:grid-cols-2">
            <span>FastAPI + Python backend</span>
            <span>TypeScript + Next.js frontend</span>
            <span>Agentic AI / GenAI workflows</span>
            <span>Automation, data, and SQL</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/prakhar-srivastavaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-300 px-5 py-2 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_14px_36px_rgba(251,191,36,0.45)]"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/prakhar-srivastavaa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 font-semibold text-amber-100 transition hover:border-amber-300 hover:text-amber-300"
            >
              View GitHub
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300/80">
            <span className="rounded-full border border-white/10 px-3 py-1">Next.js</span>
            <span className="rounded-full border border-white/10 px-3 py-1">TypeScript</span>
            <span className="rounded-full border border-white/10 px-3 py-1">FastAPI</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Automation</span>
            <span className="rounded-full border border-white/10 px-3 py-1">ML / NLP</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative h-72 w-72 lg:h-80 lg:w-80 group cursor-pointer">
            {/* Animated ring on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-amber-300/40 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse-ring_1.5s_ease-out_infinite]" />
            
            {/* Main container with gradient border */}
            <div className="relative h-full w-full rounded-full border border-amber-200/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-[0_25px_70px_rgba(17,24,39,0.6)] transition-all duration-500 ease-out group-hover:shadow-[0_30px_90px_rgba(251,191,36,0.25)] group-hover:border-amber-300/50">
              <div className="absolute inset-1 rounded-full border border-amber-300/30 transition-all duration-500 group-hover:border-amber-300/60" />
              
              {/* Profile Image with smooth transform */}
              <img
                src="/pic.jpg"
                alt="Prakhar Srivastava"
                className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.08] group-hover:brightness-110"
              />
              
              {/* Smooth tooltip */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 ease-out pointer-events-none">
                
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-b border-r border-amber-300/30 rotate-45" />
                
              </div>
            </div>
            
            {/* Open to work badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900 border border-white/20 rounded-full px-4 py-2 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-200">Open to work</span>
            </div>
          </div>
          
          {/* Name and Location */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Prakhar Srivastava</h2>
            <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bangalore, Karnataka, India</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-8">
              <a
                href="mailto:emailprakharsrivastava@gmail.com"
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Email</span>
              </a>
              
              <a
                href="https://linkedin.com/in/prakhar-srivastavaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/prakhar-srivastavaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}