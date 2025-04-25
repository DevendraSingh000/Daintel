import React, { useRef } from 'react';
import { FaTooth } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

function ReputationSec() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  const titleInView = useInView(titleRef, { threshold: 0.2 });
  const subtitleInView = useInView(subtitleRef, { threshold: 0.2 });
  const descInView = useInView(descRef, { threshold: 0.2 });
  const imageInView = useInView(imageRef, { threshold: 0.2 });

  const imageSlideLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const cardZoom = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cards = [
    {
      logo: <FaTooth className="text-purple-500 text-3xl sm:text-4xl" />,
      heading: 'Trusted by Thousands',
      desc: 'Over 10,000 satisfied patients who have experienced quality care',
    },
    {
      logo: <FaTooth className="text-purple-500 text-3xl sm:text-4xl" />,
      heading: 'Award-Winning Service',
      desc: 'Recognized for excellence in dentistry with multiple awards.',
    },
    {
      logo: <FaTooth className="text-purple-500 text-3xl sm:text-4xl" />,
      heading: 'Innovative Techniques',
      desc: 'Pioneering new dental solutions and technology.',
    },
    {
      logo: <FaTooth className="text-purple-500 text-3xl sm:text-4xl" />,
      heading: 'Community-Focused',
      desc: 'Proudly serving our local community with a commitment.',
    },
  ];

  return (
    <section className="bg-[#f0f0f0] px-4 sm:px-6 lg:px-12 overflow-hidden py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.button
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="shadow-lg mb-4 shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl"
        >
          Since
        </motion.button>

        <motion.h2
          ref={subtitleRef}
          initial="hidden"
          animate={subtitleInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-3xl font-semibold"
        >
          Reputation Since 2017
        </motion.h2>

        <motion.p
          ref={descRef}
          initial="hidden"
          animate={descInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-gray-600 mt-2"
        >
          Delivering trusted, quality dental care with a reputation for excellence since 2017.
        </motion.p>
      </div>

      {/* Image + Cards Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <motion.div
          ref={imageRef}
          variants={imageSlideLeft}
          initial="hidden"
          animate={imageInView ? 'visible' : 'hidden'}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <img
              src="https://framerusercontent.com/images/01fSugIboWJSfgS2raQnZ6PZfM.png?scale-down-to=2048"
              alt="Main doctor"
              className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[500px] xl:w-[550px] rounded-3xl border-4 border-white shadow-xl object-cover transition-all duration-300"
            />
            <img
              src="https://framerusercontent.com/images/Fw2cZVXuk5ijHfKZZXePrrIB4e0.jpg?scale-down-to=512"
              alt="Braces model"
              className="w-36 h-28 sm:w-40 sm:h-32 rounded-2xl absolute bottom-[-20px] right-[-25px] border-4 border-white shadow-md object-cover transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="flex-1 w-full rounded-2xl py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {cards.map((item, i) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, { threshold: 0.2 });

              return (
                <motion.div
                  key={i}
                  ref={cardRef}
                  variants={cardZoom}
                  initial="hidden"
                  animate={cardInView ? 'visible' : 'hidden'}
                  className="bg-white group w-full max-w-[320px] sm:max-w-[360px] py-6 px-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-16 w-16 group-hover:p-7 sm:h-20 sm:w-20 flex items-center justify-center rounded-2xl shadow-md shadow-black/10 bg-gray-100 mb-4 mx-auto sm:mx-0 duration-500">
                    {item.logo}
                  </div>
                  <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center sm:text-left">
                    {item.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReputationSec;
