"use client";

import { useState } from "react";

// Projects.tsx
const projects = [
  {
    title: "GeekCode — Coding Practice Platform",
    year: "2025",
    status: "Complete",
    categories: ["Web Development", "Full-stack"],
    description: "Built a full-stack coding platform using Next.js, TypeScript, and Firebase. Implemented authentication system with signup, login, and password reset. Created interactive code editor with test case execution and validation. Used Recoil for state management and Firestore for data persistence.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Recoil"],
    link: "https://geek-code-alpha.vercel.app/",
    thumbnail: "/geekcode-thumb.png",
    points: [
      "Full-stack platform using Next.js, TypeScript, and Firebase.",
      "Authentication, code editor, test case execution, and validation.",
      "State management with Recoil, data persistence with Firestore.",
    ],
  },
  {
    title: "Anuvaad — English to Hinglish Translator",
    year: "2024",
    status: "Complete",
    categories: ["Machine Learning", "NLP"],
    description: "Transformer-based NLP model for translation. Fine-tuned Llama 3 with PEFT, LoRA, and quantization. Efficient fine-tuning and deployment with Unsloth.",
    technologies: ["Python", "PyTorch", "Llama 3", "PEFT", "LoRA"],
    link: "",
    thumbnail: "/anuvaad-thumb.png",
    points: [
      "Transformer-based NLP model for translation.",
      "Fine-tuned Llama 3 with PEFT, LoRA, and quantization.",
      "Efficient fine-tuning and deployment with Unsloth.",
    ],
  },
  {
    title: "whatsNow! — WhatsApp Auto-Reply Script",
    year: "2023",
    status: "Complete",
    categories: ["Automation", "Scripting"],
    description: "Python automation using Selenium for WhatsApp inquiries. Reduced manual response time by 60%. Automated 95% of information delivery for 100+ students.",
    technologies: ["Python", "Selenium", "WhatsApp API"],
    link: "",
    thumbnail: "/whatsnow-thumb.png",
    points: [
      "Python automation using Selenium for WhatsApp inquiries.",
      "Reduced manual response time by 60%.",
      "Automated 95% of information delivery for 100+ students.",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <section className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/30 px-4 py-8 md:px-6 md:py-10 shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-4 md:mb-6">Projects</h2>
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article 
              key={project.title} 
              className="group relative rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/70 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                {project.title.includes("GeekCode") ? (
                  <img 
                    src="/geekcode.png" 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : project.title.includes("whatsNow") ? (
                  <img 
                    src="/whatsnow.png" 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-teal-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-black text-white/10 uppercase tracking-widest">
                        {project.title.split(" ")[0]}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {project.categories.join(", ")}
                </p>

                {/* Link Icon */}
                {project.link && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 rounded-2xl shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto"
            onClick={handleModalClick}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-12">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pr-12">
                {selectedProject.title}
              </h2>

              {/* Status and Categories */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {selectedProject.status}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-sm text-slate-400">
                  {selectedProject.categories.join(", ")}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-sm text-slate-400">{selectedProject.year}</span>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Website Button */}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}