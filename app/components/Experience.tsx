"use client";

// Experience.tsx
const experiences = [
  {
    title: "Data Analytics Intern",
    company: "KFintech",
    period: "Apr 2024 – Jun 2024",
    description: "Collected, cleaned, and analyzed structured financial data to identify key patterns and insights. Automated repetitive reporting tasks with Python, improving efficiency. Wrote SQL queries to extract and transform data for reporting and analysis.",
    link: "https://www.kfintech.com/",
  },
  // Add more experiences here
];

export default function Experience() {
  return (
    <section className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/30 px-6 py-10 shadow-2xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article 
            key={index}
            className="group relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-slate-300 mb-1">{exp.company}</h4>
                <p className="text-sm text-slate-400">{exp.period}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed">
              {exp.description}
            </p>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </article>
        ))}
      </div>
    </section>
  );
}
