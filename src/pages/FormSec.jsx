import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FormSec() {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const badgeInView = useInView(badgeRef, { threshold: 0.2 });
  const titleInView = useInView(titleRef, { threshold: 0.2 });
  const infoInView = useInView(infoRef, { threshold: 0.2 });
  const formInView = useInView(formRef, { threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='bg-[#f0f0f0] pt-10 px-4 sm:px-6 lg:px-12'>
      <div className="flex flex-col pb-10 md:flex-row bg-white shadow-xl rounded-3xl p-6 md:p-10 max-w-6xl mx-auto">

        {/* Left Section */}
        <div className="flex-1 mb-10 md:mb-0">
          <motion.span
            ref={badgeRef}
            initial="hidden"
            animate={badgeInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="bg-white shadow-md text-sm px-4 py-2 rounded-full border flex items-center w-fit mb-4"
          >
            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
            Contact
          </motion.span>

          <motion.h2
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-3xl font-bold mb-4"
          >
            Book your Appointment<br />Today
          </motion.h2>

          <motion.div
            ref={infoRef}
            initial="hidden"
            animate={infoInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="space-y-3 text-gray-600"
          >
            <p className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>
              Monday to Saturday
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>
              First half 10 AM to 1PM, Second Half 5PM to 8PM
            </p>
          </motion.div>
        </div>

        {/* Right Section - Form */}
        <motion.form
          ref={formRef}
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="flex-1 space-y-5"
        >
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+91 09875 24378"
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-700">Date</label>
              <input
                type="date"
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg hover:shadow-xl transition-all"
          >
            Book Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default FormSec;
