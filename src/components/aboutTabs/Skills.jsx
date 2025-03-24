export default function Skills() {
    return (
      <section className="text-white p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center justify-items-stretch">
            {[
              "HTML & CSS",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "React",
              "Tailwind CSS",
              "Material UI",
              "VS Code",
              "Jest",
              "Git & GitHub",
              "React Testing Library",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#45a29e]/90 content-center py-3 px-1.5 rounded-xl text-sm sm:text-base min-w-fit text-nowrap font-semibold text-gray-300 border border-gray-700 hover:bg-dkgreen transition"
              >
                {skill}
              </div>
            ))}
          </div>
      </section>
    );
  }
  