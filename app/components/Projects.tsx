// Projects.tsx
export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="mb-6">
        <h3 className="font-semibold">GeekCode — Coding Practice Platform (2025)</h3>
        <ul className="list-disc ml-6">
          <li>Full-stack platform using Next.js, TypeScript, and Firebase.</li>
          <li>Authentication, code editor, test case execution, and validation.</li>
          <li>State management with Recoil, data persistence with Firestore.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Anuvaad — English to Hinglish Translator (2024)</h3>
        <ul className="list-disc ml-6">
          <li>Transformer-based NLP model for translation.</li>
          <li>Fine-tuned Llama 3 with PEFT, LoRA, and quantization.</li>
          <li>Efficient fine-tuning and deployment with Unsloth.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">whatsNow! — WhatsApp Auto-Reply Script (2023)</h3>
        <ul className="list-disc ml-6">
          <li>Python automation using Selenium for WhatsApp inquiries.</li>
          <li>Reduced manual response time by 60%.</li>
          <li>Automated 95% of information delivery for 100+ students.</li>
        </ul>
      </div>
    </section>
  );
}