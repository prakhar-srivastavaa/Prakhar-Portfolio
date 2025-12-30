// Resume.tsx
export default function Resume() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-900/30 px-4 py-8 md:px-6 md:py-10 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-4 md:mb-6">Resume</h2>
          <p className="text-base md:text-lg text-slate-200/90 mb-4 md:mb-6">
            For a detailed overview of my experience, education, and certifications, grab the PDF.
          </p>
          <a
            href="https://drive.google.com/file/d/1egUGwRPE6XtbLNA-v4fl1E4hrx9l0Nyp/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_14px_36px_rgba(251,191,36,0.45)]"
          >
            View Resume
          </a>
        </div>
        
        {/* Resume Preview */}
        <div className="flex-shrink-0">
          <a
            href="https://drive.google.com/file/d/1egUGwRPE6XtbLNA-v4fl1E4hrx9l0Nyp/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative w-36 h-48 md:w-48 md:h-64 rounded-lg overflow-hidden border-2 border-amber-300/40 shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-amber-300/70 hover:shadow-[0_15px_50px_rgba(251,191,36,0.3)] hover:scale-105">
              <img
                src="/resume-preview.png"
                alt="Resume Preview"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center text-xs font-semibold text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Click to View
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}