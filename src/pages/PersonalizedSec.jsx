import React from 'react';
import { FaTooth } from 'react-icons/fa';

function PersonalizedSec() {
  const data = [
    {
      logo: <FaTooth className='text-purple-500 text-2xl sm:text-3xl md:text-4xl' />,
      heading: "General Dentistry",
      desc: "Regular check-ups and professional cleanings to maintain your oral health and prevent future issues."
    },
    {
      logo: <FaTooth className='text-purple-500 text-2xl sm:text-3xl md:text-4xl' />,
      heading: "Dental Implants",
      desc: "Replace missing teeth with durable, natural-looking implants for a complete smile."
    },
    {
      logo: <FaTooth className='text-purple-500 text-2xl sm:text-3xl md:text-4xl' />,
      heading: "Pediatric Dentistry",
      desc: "Friendly, gentle dental care to ensure your child's visits are comfortable, enjoyable, and completely stress-free."
    },
    {
      logo: <FaTooth className='text-purple-500 text-2xl sm:text-3xl md:text-4xl' />,
      heading: "Orthodontics",
      desc: "Straighten your teeth and align your bite. Services include traditional braces, clear aligners, and retainers."
    },
    {
      logo: <FaTooth className='text-purple-500 text-2xl sm:text-3xl md:text-4xl' />,
      heading: "Cosmetic Dentistry",
      desc: "Enhance the appearance of your smile with treatments tailored to boost your confidence impression."
    },
    {
      logo: <FaTooth className='text-purple-500 text-2xl sm:text-3xl md:text-4xl' />,
      heading: "Emergency Care",
      desc: "Immediate relief for unexpected dental problems like toothaches, broken teeth, or injuries."
    },
  ];
  let heading ="Your Dental Care Solutions";
  return (
    <section className='bg-[#f0f0f0] py-12 px-4 sm:px-6 md:px-12 lg:px-20'>
      {/* Header Section */}
      <div className='text-center max-w-3xl mx-auto mb-10 sm:mb-12'>
        <button className='shadow-lg shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl'>
          Services
        </button>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-snug'>
          {heading}
        </h1>
        <p className='text-sm sm:text-base md:text-lg text-[#6E6E6E] mt-2'>
          Comprehensive dental care tailored to keep your smile healthy and bright.
        </p>
      </div>

      {/* Card Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4'>
        {data.map((item, i) => (
          <div
            key={i}
            className='bg-white rounded-3xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 shadow-lg shadow-black/10 flex flex-col items-start gap-3 sm:gap-4 transition-transform hover:-translate-y-1 duration-300 mx-2 sm:mx-4 lg:mx-6'
          >
            {/* Icon Box */}
            <div className='h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center rounded-2xl shadow-md shadow-black/10 bg-white'>
              {item.logo}
            </div>

            {/* Title */}
            <h2 className='text-base sm:text-lg md:text-xl font-semibold text-gray-800'>
              {item.heading}
            </h2>

            {/* Description */}
            <p className='text-sm sm:text-base text-[#6E6E6E] leading-relaxed'>
              {item.desc}
            </p>
          </div>

        ))}
      </div>
    </section>
  );
}

export default PersonalizedSec;
