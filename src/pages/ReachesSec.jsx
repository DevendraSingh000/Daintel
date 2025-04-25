import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function ReachesSec() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0.5, y: 50, transition: { duration: 0.4 } },
  };

  const items = [
    { label: '2000+ Reviews' },
    { label: '4.5+ Rating' },
    { label: 'MDCO Verified' },
  ];

  return (
    <section className="bg-[#F0F0F0]">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12 lg:mx-20 py-12 sm:py-16"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`flex justify-center items-center gap-3 py-5 shadow-md shadow-black/40 rounded-2xl ${
              index < 2 ? 'border-r lg:border-r' : ''
            }`}
          >
            <span className="text-xl sm:text-2xl">O</span>
            <h1 className="text-[#6E6E6E] text-base sm:text-lg">{item.label}</h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ReachesSec;
