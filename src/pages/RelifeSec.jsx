import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function RelifeSec() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const fadeUpVariant = {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-ec7f6823ec2b?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10 h-[350px] sm:h-[450px] md:h-[650px] flex flex-col justify-center items-center text-white px-4 py-10"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl leading-tight"
        >
          We promise complete relief
        </motion.h1>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10 w-full sm:w-[90%] max-w-5xl">
          {/* Box 1 */}
          <motion.div
            variants={fadeUpVariant}
            className="sm:border-r sm:border-white text-center px-4 sm:px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">A+</h2>
            <p className="text-base sm:text-lg mt-2">Standards</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            variants={fadeUpVariant}
            className="text-center px-4 sm:px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">2000+</h2>
            <p className="text-base sm:text-lg mt-2">Successful Operations</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            variants={fadeUpVariant}
            className="sm:border-l sm:border-white text-center px-4 sm:px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">12+</h2>
            <p className="text-base sm:text-lg mt-2">Years Experience</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default RelifeSec;
