import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const text = "Who We Are & Our Vision for Brighter Smiles";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariant = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
};
const buttonVariant2 = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
};

const imageZoomVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
};

function HeroSec() {
  const headlineRef = useRef(null);

  // Optional: keep GSAP only if needed
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

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants}>
      <section className="bg-[#F0F0F0]">
        <div className="relative z-10">
          <div className="min-h-screen bg-[#F0F0F0]/80 backdrop-blur-sm">
            {/* Top Decorative Image */}
            <div className="absolute top-0 left-0 w-full z-0">
              <img
                className="w-full object-contain"
                src="https://framerusercontent.com/images/rxnlNFdtE9y0lBHLVHKBw8EU.webp?scale-down-to=2048"
                alt="Top Graphic"
              />
            </div>

            {/* Content Section */}
            <div className="w-[95%] max-w-[1536px] mx-auto flex flex-col md:flex-row items-center justify-between pt-24 gap-10 md:gap-0 relative z-10">

              {/* Left Content */}
              <div className="w-full md:w-1/2 h-auto flex items-center">
                <div className="p-5 sm:p-10 flex flex-col gap-6 justify-center text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-4 text-[#6E6E6E]">
                    <motion.h1 variants={textVariant} className="text-sm sm:text-base md:text-lg font-medium">
                      1500+ Trusted Patients
                    </motion.h1>
                  </div>

                  <motion.h1
                    ref={headlineRef}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight flex flex-wrap justify-center md:justify-start gap-2"
                    variants={containerVariants}
                  >
                    {text.split(" ").map((word, index) => (
                      <motion.span key={index} variants={textVariant} className="inline-block">
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.p
                    className="text-base sm:text-lg text-[#6E6E6E] max-w-xl mx-auto md:mx-0"
                    variants={textVariant}
                  >
                    Experience exceptional dental care for a healthier, brighter smile you will love to show off!
                  </motion.p>

                  <motion.div
                    className="flex justify-center md:justify-start"
                    variants={buttonVariant}
                  >
                    <button className="text-white px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 transition shadow-lg shadow-black/40 relative overflow-hidden text-sm sm:text-base">
                      <span className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"></span>
                      <span className="relative z-10">Book Consultation</span>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Right Graphic */}
              <motion.div
                className="w-full md:w-1/2 flex items-center justify-center"
                variants={imageZoomVariant}
              >
                <div className="relative w-[260px] sm:w-[320px] md:w-[400px] h-[260px] sm:h-[320px] md:h-[400px] mt-10 sm:mt-16 md:mt-24">

                  {/* Top Label */}
                  <motion.div variants={buttonVariant} className="absolute z-20 flex items-center gap-2 p-2 text-xs sm:text-sm bg-white text-[#7a7a7a] rounded-2xl top-2 sm:top-6 left-2 sm:left-6 shadow-md">
                    <span>OO</span>
                    <span>Happy <br />Teeth</span>
                  </motion.div>

                  {/* Circular Image and Borders */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute h-full w-full border-r-[18px] sm:border-r-[30px] md:border-r-[40px] rounded-full border-[#3fc9ff] transform rotate-[45deg]" />
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
                      src="https://framerusercontent.com/images/tRy43YTAsSvZlxdCyb3t6sobedQ.webp"
                      alt="Circle Image"
                    />
                    <div className="absolute h-full w-full border-l-[18px] sm:border-l-[30px] md:border-l-[40px] rounded-full border-[#41dcfb] transform rotate-[225deg]" />
                  </div>

                  {/* Bottom Label */}
                  <motion.div variants={buttonVariant2} className="absolute flex items-center gap-2 p-2 text-xs sm:text-sm bg-white text-[#7a7a7a] rounded-2xl bottom-2 sm:bottom-6 right-2 sm:right-6 shadow-md">
                    <span>OO</span>
                    <span>Fit and <br />Fine</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default HeroSec;
