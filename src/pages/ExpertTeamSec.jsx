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
    <>
      <section className="bg-[#f0f0f0] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className='text-center flex flex-col justify-center items-center max-w-3xl mx-auto mb-10 sm:mb-12'>
          <button className='shadow-lg shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl'>
            Team
          </button>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-snug'>
            Meet Our Expert Team
          </h1>
          <p className='text-sm sm:text-base md:text-lg text-[#6E6E6E] mt-2 sm:w-[20rem]'>
            Experienced dental professionals dedicated to your oral health and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-4">
          {experts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 shadow-lg shadow-black/10 flex sm:flex-col items-start sm:items-center gap-4 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 lg:h-32 lg:w-32 flex items-center justify-center rounded-2xl bg-white shadow-md shadow-black/10 overflow-hidden">
                <img src={item.path} alt="Person photo" className="h-full w-full object-cover rounded-2xl" />
              </div>

              {/* Title and Description */}
              <div className="flex flex-col text-left sm:text-center sm:items-center sm:mt-2">
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
    </>
  )
}

export default ExpertTeamSec
