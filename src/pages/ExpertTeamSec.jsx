import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function ExpertTeamSec() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

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
  ];

  return (
    <section ref={sectionRef} className="bg-[#f0f0f0] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-3xl mx-auto mb-10 sm:mb-12 text-center"
      >
        <motion.button
          variants={cardVariants}
          className="shadow-lg shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl"
        >
          Team
        </motion.button>
        <motion.h1
          variants={cardVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-snug"
        >
          Meet Our Expert Team
        </motion.h1>
        <motion.p
          variants={cardVariants}
          className="text-sm sm:text-base md:text-lg text-[#6E6E6E] mt-2 mx-auto max-w-xs sm:max-w-md"
        >
          Experienced dental professionals dedicated to your oral health and comfort.
        </motion.p>
      </motion.div>

      {/* Experts Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {experts.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-black/10 flex flex-col sm:flex-row items-center gap-4 transition-transform duration-300"
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
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                {item.work}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ExpertTeamSec;
