import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const text = "Who We Are & Our Vision for Brighter Smiles";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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

  useEffect(() => {
    const words = headlineRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0, filter: "blur(8px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, stagger: 0.2, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="relative min-h-screen flex flex-col justify-center bg-[#F0F0F0] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="https://framerusercontent.com/images/rxnlNFdtE9y0lBHLVHKBw8EU.webp?scale-down-to=2048"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between py-20 gap-10">
        {/* Left Text Area */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-6">
          <motion.h3
            variants={textVariant}
            className="text-sm sm:text-base md:text-lg font-medium text-[#6E6E6E]"
          >
            1500+ Trusted Patients
          </motion.h3>

          <motion.h1
            ref={headlineRef}
            variants={containerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {text.split(" ").map((word, index) => (
              <motion.span key={index} variants={textVariant} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={textVariant}
            className="text-base sm:text-lg text-[#6E6E6E] max-w-lg mx-auto md:mx-0"
          >
            Experience exceptional dental care for a healthier, brighter smile you will love to show off!
          </motion.p>

          <motion.div variants={buttonVariant} className="flex justify-center md:justify-start">
            <button className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg shadow-black/30 transition">
              <span className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"></span>
              <span className="relative z-10">Book Consultation</span>
            </button>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <motion.div variants={imageZoomVariant} className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[260px] sm:w-[320px] md:w-[400px] h-[260px] sm:h-[320px] md:h-[400px] mt-10 md:mt-0">

            {/* Top Label */}
            <motion.div
              variants={buttonVariant}
              className="absolute top-2 sm:top-6 left-2 sm:left-6 bg-white text-[#7a7a7a] p-2 rounded-2xl text-xs sm:text-sm flex items-center gap-2 shadow-md z-20"
            >
              <span>OO</span>
              <span>Happy <br />Teeth</span>
            </motion.div>

            {/* Circular Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full h-full border-r-[18px] sm:border-r-[30px] md:border-r-[40px] border-[#3fc9ff] rounded-full rotate-45" />
              <img
                src="https://framerusercontent.com/images/tRy43YTAsSvZlxdCyb3t6sobedQ.webp"
                alt="Main Circle"
                className="w-full h-full object-cover rounded-full absolute"
              />
              <div className="absolute w-full h-full border-l-[18px] sm:border-l-[30px] md:border-l-[40px] border-[#41dcfb] rounded-full rotate-[225deg]" />
            </div>

            {/* Bottom Label */}
            <motion.div
              variants={buttonVariant2}
              className="absolute bottom-2 sm:bottom-6 right-2 sm:right-6 bg-white text-[#7a7a7a] p-2 rounded-2xl text-xs sm:text-sm flex items-center gap-2 shadow-md"
            >
              <span>OO</span>
              <span>Fit and <br />Fine</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSec;
