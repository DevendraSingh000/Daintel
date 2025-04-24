import React from 'react';
import { FaQuoteRight } from "react-icons/fa";

const PatientReplies = () => {
  const cards = [
    {
      imgPath: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily T.",
      post: "Engineer",
      decs: "I can’t thank Dr. Jonny enough for my new smile! The attention to detail and personalized care made my experience wonderful. I highly recommend their services.",
    },
    {
      imgPath: "https://randomuser.me/api/portraits/men/64.jpg",
      name: "Michael R.",
      post: "Trucker",
      decs: "After years of avoiding the dentist, Dr. Mehta helped me achieve a comfortable and pain-free experience. I’m so glad I finally took the plunge and received the care I needed!",
    },
    {
      imgPath: "https://randomuser.me/api/portraits/women/66.jpg",
      name: "Sarah L.",
      post: "Model",
      decs: "Dr. Alberto made my child's first dental visit easy and fun. They loved the friendly environment and the staff’s patience, kindness, and care. Truly a great experience for our little one!",
    },
    {
      imgPath: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "Salin K.",
      post: "Singer",
      decs: "The team at this clinic is top-notch. They’ve been able to restore my teeth with such precision, care, and attention to detail; I couldn’t be happier with the results and the overall experience!",
    },
  ];

  return (
    <section className="bg-[#f0f0f0] py-16 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12 ">
      <button className='shadow-lg mb-4 shadow-[#89f2f4]/90 px-5 py-1.5 text-sm sm:text-base text-[#6E6E6E] bg-white rounded-2xl'>
            Team
          </button>
        <h2 className="text-3xl font-semibold">What Our Patients Say</h2>
        <p className="text-gray-600 mt-2">Real words from real people.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative bg-white rounded-3xl shadow-md p-6 flex flex-col gap-4 transition-transform duration-300 ${
              i % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'
            }`}
          >
            {/* Quotation Icon */}
            <div className="absolute top-4 right-4 text-indigo-200 text-3xl">
              <FaQuoteRight />
            </div>

            {/* Profile Image and Info */}
            <div className="flex items-center gap-4">
              <img
                src={card.imgPath}
                alt={card.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-bold">{card.name}</h3>
                <p className="text-gray-500 text-sm">{card.post}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed">{card.decs}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientReplies;
