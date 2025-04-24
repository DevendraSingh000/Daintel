import React from 'react';
import { FaTooth } from 'react-icons/fa';

function Reputation() {
  const cards = [
    {
      logo: <FaTooth className="text-purple-500 text-2xl sm:text-3xl md:text-4xl" />,
      heading: 'Trusted by Thousands',
      desc: 'Over 10,000 satisfied patients who have experienced quality care',
    },
    {
      logo: <FaTooth className="text-purple-500 text-2xl sm:text-3xl md:text-4xl" />,
      heading: 'Award-Winning Service',
      desc: 'Recognized for excellence in dentistry with multiple awards.',
    },
    {
      logo: <FaTooth className="text-purple-500 text-2xl sm:text-3xl md:text-4xl" />,
      heading: 'Innovative Techniques',
      desc: 'Pioneering new dental solutions and technology.',
    },
    {
      logo: <FaTooth className="text-purple-500 text-2xl sm:text-3xl md:text-4xl" />,
      heading: 'Community-Focused',
      desc: 'Proudly serving our local community with a commitment.',
    },
  ];

  return (
    <section className="bg-[#f0f0f0]  px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <button className="shadow-lg mb-4 shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl">
          Since
        </button>
        <h2 className="text-3xl font-semibold">Reputation Since 2017</h2>
        <p className="text-gray-600 mt-2">
          Delivering trusted, quality dental care with a reputation for excellence since 2017.
        </p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto rounded-3xl2 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Doctor Image with Overlay */}
        <div className="flex-1 flex items-center justify-center">
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
        </div>

        {/* Right: Cards Grid */}
        <div className="flex-1 w-full rounded-2xl py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {cards.map((item, i) => (
              <div
                key={i}
                className="bg-white group  w-full max-w-[320px] sm:max-w-[360px] py-6 px-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-16 w-16 group-hover:p-7  sm:h-20 sm:w-20 flex items-center justify-center rounded-2xl shadow-md shadow-black/10 bg-gray-100 mb-4 mx-auto sm:mx-0 duration-500">
                  {item.logo}
                </div>
                <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-800  mb-2 text-center sm:text-left">
                  {item.heading}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Reputation;
