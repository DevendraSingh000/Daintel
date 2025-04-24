import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HeroSec() {

  const headlineRef = useRef(null);

  useEffect(() => {
    const words = headlineRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      {
        opacity: 0,
        filter: "blur(8px)",
        y: 20,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  const text = "Who We Are & Our Vision for Brighter Smiles";

  return (
    <>
      <section className="bg-[#F0F0F0]">
        {/* Fixed Background Image */}


        {/* Content Wrapper */}
        <div className="relative z-10">
          <div className="min-h-screen bg-[#F0F0F0]/80 backdrop-blur-sm">
            {/* Top Image (Optional or Decorative) */}
            <div className="absolute top-0 left-0 w-full">
              <img
                className="w-full object-contain"
                src="https://framerusercontent.com/images/rxnlNFdtE9y0lBHLVHKBw8EU.webp?scale-down-to=2048"
                alt="Top Graphic"
              />
            </div>

            {/* Responsive Container */}
            <div className="w-[95%] max-w-[1536px] mx-auto flex flex-col md:flex-row items-center justify-between pt-20 gap-10 md:gap-0">
              {/* Left Section */}
              <div className="w-full md:w-1/2 h-auto md:h-[500px] flex items-center">
                <div className="p-5 sm:p-10 flex flex-col gap-6 justify-center">
                  <div className="flex items-center gap-4 text-[#6E6E6E]">
                    {/* You can add an icon or image here */}
                    <div>
                      <h1 className="text-sm sm:text-base md:text-lg font-medium">1500+ Trusted Patients</h1>
                    </div>
                  </div>

                  <h1
                    ref={headlineRef}
                    className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-4xl flex flex-wrap justify-start gap-2"
                  >
                    {text.split(" ").map((word, index) => (
                      <span key={index} className="inline-block">
                        {word}
                      </span>
                    ))}
                  </h1>

                  <p className="text-base sm:text-lg text-[#6E6E6E]">
                    Experience exceptional dental care for a healthier, brighter smile you will love to show off!
                  </p>

                  <button className="w-fit text-white px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 transition shadow-lg shadow-black/40 relative overflow-hidden text-sm sm:text-base">
                    <span className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"></span>
                    <span className="relative z-10">Book Consultation</span>
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/2 flex items-center justify-center h-auto md:h-[500px]">
                <div className="relative w-[280px] sm:w-[320px] md:w-[400px] h-[280px] sm:h-[320px] md:h-[400px] mt-8 md:mt-24">
                  {/* Top Label */}
                  <div className="absolute z-20 flex items-center gap-2 p-2 text-xs sm:text-sm bg-[#fff] text-[#7a7a7a] rounded-2xl top-2 sm:top-6 left-2 sm:left-6 shadow-md">
                    <span>OO</span>
                    <span>Happy <br />Teeth</span>
                  </div>

                  {/* Circle Image with Border Halves */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute h-full w-full border-r-[20px] sm:border-r-[30px] md:border-r-[40px] rounded-full border-[#3fc9ff] transform rotate-[45deg]" />
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
                      src="https://framerusercontent.com/images/tRy43YTAsSvZlxdCyb3t6sobedQ.webp"
                      alt="Circle Image"
                    />
                    <div className="absolute h-full w-full border-l-[20px] sm:border-l-[30px] md:border-l-[40px] rounded-full border-[#41dcfb] transform rotate-[225deg]" />
                  </div>

                  {/* Bottom Label */}
                  <div className="absolute flex items-center gap-2 p-2 text-xs sm:text-sm bg-[#fff] text-[#7a7a7a] rounded-2xl bottom-2 sm:bottom-6 right-2 sm:right-6 shadow-md">
                    <span>OO</span>
                    <span>Fit and <br />Fine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* You can include <Reaches /> or other sections here */}
            {/* <Reaches /> */}
          </div>
        </div>
      </section>


    </>
  )
}

export default HeroSec
