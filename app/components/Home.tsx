// Home.tsx
export default function Home() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <div className="flex flex-col items-center">
        <img src="/pic.jpg" alt="Prakhar Srivastava" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-3xl font-bold">Prakhar Srivastava</h1>
        <p className="text-gray-600">Bangalore, Karnataka, India</p>
        <div className="flex gap-4 mt-2">
          <a href="mailto:emailprakharsrivastava@gmail.com">Email</a>
          <a href="https://linkedin.com/in/prakhar-srivastavaa/">LinkedIn</a>
          <a href="https://github.com/prakhar-srivastavaa">GitHub</a>
          <a href="https://leetcode.com/u/prakhar_srivastavaa/">LeetCode</a>
        </div>
        <p className="mt-6 text-center">
          Welcome to my portfolio! I’m a Computer Science graduate passionate about full-stack development, automation, and AI.
        </p>
      </div>
    </section>
  );
}