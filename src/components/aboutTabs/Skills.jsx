export default function Skills() {
    return (
      <section className="text-white p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center justify-items-stretch">
            {[
              "HTML & CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Material UI",
              "Next.js",
              "Git & GitHub",
              "VS Code",
              "Jest",
              "React Testing Library",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#45a29e]/90 content-center p-3 rounded-xl text-sm sm:text-base font-semibold text-gray-300 border border-gray-700 hover:bg-gray-700 transition"
              >
                {skill}
              </div>
            ))}
          </div>
      </section>
    );
  }
  