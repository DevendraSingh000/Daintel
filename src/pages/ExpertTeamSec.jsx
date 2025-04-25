import React from 'react'

function ExpertTeamSec() {
  const experts = [
    {
      path: "https://framerusercontent.com/images/0bGMRBJ2GDTP9hesxRLdYIseZ0.png",
      name: "Alina Khan",
      work: "Chief Dentist | 10+ years",
    },
    {
      path: "https://framerusercontent.com/images/e1X8ciinEDJKxSlFaGxd0sbiIg.png",
      name: "Jonny Robert",
      work: "Orthodontist Specialist",
    },
    {
      path: "https://framerusercontent.com/images/K6kwb1Zf0rzrg1u8oQldS1yfpw.png",
      name: "Alberto Cabben",
      work: "Pediatric Dentist",
    },
    {
      path: "https://framerusercontent.com/images/WWO1vuDfryc4AMMPfIt40vHtI6s.png",
      name: "Julia Matics",
      work: "Implant Specialist",
    },
  ]

  return (
    <section className="bg-[#f0f0f0] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto mb-10 sm:mb-12 text-center">
        <button className="shadow-lg shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl">
          Team
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-snug">
          Meet Our Expert Team
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#6E6E6E] mt-2 mx-auto max-w-xs sm:max-w-md">
          Experienced dental professionals dedicated to your oral health and comfort.
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {experts.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-black/10 flex flex-col sm:flex-row items-center gap-4 transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Image Container */}
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-2xl bg-white shadow-md shadow-black/10 overflow-hidden flex items-center justify-center">
              <img
                src={item.path}
                alt={`${item.name} photo`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Name and Work Description */}
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                {item.work}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertTeamSec
