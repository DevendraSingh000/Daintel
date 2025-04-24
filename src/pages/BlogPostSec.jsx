import React from 'react'

function BlogPostSec() {
  const card = [
    {
      path: 'https://framerusercontent.com/images/esWiYSci0SU3dEQhAdzPFeThM0.webp',
      heading: 'How to Maintain Healthy Gums: Tips for Preventing Gum Disease',
      date: 'Mar 9, 2024',
    },
    {
      path: 'https://framerusercontent.com/images/VU8iSMMO7x0on3Dd5idTYItaU7s.webp?scale-down-to=512',
      heading: 'The Importance of Regular Dental Checkups',
      date: 'Mar 13, 2024',
    },
    {
      path: 'https://framerusercontent.com/images/DgHPLuYWvSKqqD090dB5WMSJuA8.webp?scale-down-to=512',
      heading: 'Teeth Sensitivity: Causes, Treatments, and How to Manage It',
      date: 'Mar 9, 2024',
    },
  ];

  return (
    <section className="bg-[#f0f0f0] py-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <button className="shadow-lg mb-4 shadow-[#89f2f4]/90 px-4 sm:px-5 py-1.5 text-sm sm:text-base flex items-center text-[#6E6E6E] bg-white rounded-2xl transition-all">
            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
            Blog
          </button>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Our Blog Post</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Insights, tips, and updates to keep you informed about your dental health journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {card.map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden group shadow-2xl bg-white transition-transform duration-300 hover:scale-[1.03]">
            <div className="h-60 sm:h-72 md:h-64 lg:h-72">
              <img
                src={item.path}
                alt={item.heading}
                className="h-full w-full object-cover group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">{item.heading}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPostSec;
