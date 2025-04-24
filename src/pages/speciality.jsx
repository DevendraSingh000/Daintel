import React from 'react'

function Speciality() {
  return (
    <>
      <section className="bg-[#f0f0f0] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <button className="px-4 py-1 rounded-full bg-white text-sm text-[#6E6E6E] shadow-md shadow-cyan-300/50 mb-4">
              Speciality
            </button>

            <h2 className="text-3xl sm:text-4xl w-[400px] font-bold text-black mb-6">
              Our Speciality: Smile Transformations
            </h2>

            <ul className="space-y-4 text-[#4f4f4f] text-sm sm:text-base">
              {[
                "Tailored treatments to enhance your unique smile.",
                "State-of-the-art tools for precise and effective results.",
                "Combining cosmetic, orthodontic, and restorative procedures.",
                "Durable solutions for a beautiful smile that stands the test of time."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="check" className="h-5 w-5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-6 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:scale-105 transition-all text-sm sm:text-base">
              Know More
            </button>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative">
            {/* Main Image */}
            <img
              src="https://framerusercontent.com/images/TVcobauxRYHXcIJDonpomdknWo.jpg?scale-down-to=2048"
              alt="Main doctor"
              className="w-full rounded-3xl shadow-xl"
            />

            {/* Overlapping Image */}
            <img
              src="https://framerusercontent.com/images/Fw2cZVXuk5ijHfKZZXePrrIB4e0.jpg?scale-down-to=1024"
              alt="Braces model"
              className="w-40 h-28 rounded-2xl absolute bottom-[-20px] right-[-20px] border-4 border-white shadow-md object-cover"
            />
          </div>
        </div>
      </section>


    </>
  )
}

export default Speciality
