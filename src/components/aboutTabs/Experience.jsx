import React from 'react'

export default function Experience() {
  return (
    <section>
        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-primaryred">
            Frontend Developer
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Building Bloques | <span className="italic">[08/2024] – Present</span>
          </p>

          <ul className="mt-4 space-y-3 text-gray-300 text-sm sm:text-base list-disc list-inside">
            <li>Implement new features and enhance functionalities in existing projects.</li>
            <li>Complete partially developed websites by adding additional pages, screens, and interactive elements.</li>
            <li>Develop responsive and high-performance websites from scratch.</li>
            <li>Convert UI/UX designs into pixel-perfect, fully functional web applications.</li>
            <li>Integrate APIs to enable dynamic and data-driven web experiences.</li>
            <li>Collaborate with designers and developers to deliver high-quality digital solutions.</li>
            <li>Ensure code quality, performance optimization, and best practices in modern frontend development.</li>
          </ul>
          <div className="flex gap-2 my-3">
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>Next.js</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>JavaScript</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>TailwindCSS</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>Github</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>Canva</p>
         </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-primaryred">
            Frontend Engineer - Frontend Lead
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Vechy Graphix | <span className="italic">[04/2024] – [09/2024]</span>
          </p>

          <ul className="mt-4 space-y-3 text-gray-300 text-sm sm:text-base list-disc list-inside">
            <li>Contributed to the development of Bayasel, an agro-business platform, as part of the frontend engineering team.</li>
            <li>Collaborated closely with UI/UX designers and backend developers to implement user-friendly and responsive web interfaces.</li>
            <li>After a few months, promoted to Frontend Lead, taking on additional responsibilities in team coordination and project management.</li>
            <li>Assigned tasks to frontend developers, provided technical guidance, and ensured smooth workflow.</li>
            <li>Worked hands-on with the team to deliver high-quality solutions, fostering a collaborative development environment.</li>
          </ul>
          <div className="flex gap-2 my-3">
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>React</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>JavaScript</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>TailwindCSS</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>Github</p>
            <p className='text-xs py-1 px-2 border border-[#45a29e] bg-gray-400/20 rounded-2xl'>Trello</p>
          </div>
        </div>
    </section>
  )
}
