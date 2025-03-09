import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="text-white pt-12 lg:px-6">
        {/* Tab Buttons */}
        <div className="flex gap-4 border-b border-gray-700 pb-3 mb-5">
          {["experience", "education", "skills"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-2 sm:px-6 text-sm sm:text-base font-semibold capitalize ${
                activeTab === tab
                  ? "border-b-2 border-black text-black bg-white rounded-full"
                  : "text-gray-400 hover:text-white bg-white/30 rounded-full"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="font-roboto h-[400px] sm:h-[450px] lg:h-[500px]  overflow-y-auto scrollbar-thin scrollbar-thumb-green/50 scrollbar-track-gray-800">
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
          {activeTab === "skills" && <Skills />}
          <a href="/ELIZABETH AFOLABI_resume.pdf" download>
            <button className="text-[#45a29e] mt-2 border border-[#45a29e] p-2 rounded hover:bg-[#45a29e]/20 mx-6">
              Download my CV
            </button>
          </a>

        </div>
    </section>
  );
}
