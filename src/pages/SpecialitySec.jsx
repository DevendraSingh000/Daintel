import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function SpecialitySec() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0.5, y: 50, transition: { duration: 0.4 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0.5, y: 50, transition: { duration: 0.4 } },
  };
  const fadeleft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0.5, y: 50, transition: { duration: 0.4 } },
  };

  return (
    <section ref={containerRef} className="bg-[#f0f0f0] py-12 px-4 w-screen sm:px-6 md:px-12 lg:px-36">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
      >

        {/* Left Content */}
        <motion.div variants={cardVariants} className="flex-1 max-w-2xl p-2">
          <motion.button
            variants={fadeRight}
            className="px-4 py-1 rounded-full bg-white text-sm text-[#6E6E6E] shadow-md shadow-cyan-300/50 mb-4"
          >
            SpecialitySec
          </motion.button>

          <motion.h2
            variants={fadeRight}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 leading-snug max-w-md w-full"
          >
            Our Speciality: Smile Transformations
          </motion.h2>

          <motion.ul variants={containerVariants} className="space-y-4 text-[#4f4f4f] text-sm sm:text-base">
            {[
              "Tailored treatments to enhance your unique smile.",
              "State-of-the-art tools for precise and effective results.",
              "Combining cosmetic, orthodontic, and restorative procedures.",
              "Durable solutions for a beautiful smile that stands the test of time."
            ].map((point, i) => (
              <motion.li key={i} variants={cardVariants} className="flex items-start gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                  alt="check"
                  className="h-5 w-5 mt-1"
                />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            variants={fadeleft}
            className="mt-8 px-6 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Image Content */}
        <motion.div variants={fadeRight} className="flex-1 w-full relative max-w-xl">
          <motion.img
            variants={fadeRight}
            src="https://framerusercontent.com/images/TVcobauxRYHXcIJDonpomdknWo.jpg?scale-down-to=2048"
            alt="Main doctor"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
          <motion.img
            variants={fadeRight}
            src="https://framerusercontent.com/images/Fw2cZVXuk5ijHfKZZXePrrIB4e0.jpg?scale-down-to=1024"
            alt="Braces model"
            className="w-32 h-24 sm:w-40 sm:h-28 rounded-2xl absolute bottom-[-20px] right-[-40px] border-4 border-white shadow-md object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SpecialitySec;
