import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function FormForContact() {
  const titleRef = useRef();
  const descRef = useRef();
  const formRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, { opacity: 0, y: -50, duration: 1 });
    gsap.from(descRef.current, { opacity: 0, x: -50, duration: 1, delay: 0.3 });
    gsap.from(formRef.current, { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from(mapRef.current, { opacity: 0, scale: 0.9, duration: 1, delay: 1 });
  }, []);

  return (
    <section className="bg-[#f0f0f0] pt-0 m-0 overflow-x-hidden">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl px-4 py-12 sm:px-6 lg:px-12">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        </div>

        {/* Description */}
        <div ref={descRef} className="text-center text-gray-600 mb-12">
          <p>
            Feel free to contact us with your queries. We are available from <strong>10 AM to 8 PM</strong> (Mon-Sat).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form ref={formRef} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700">Full Name</label>
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
            <div>
              <label className="block text-sm text-gray-700">Phone</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Date</label>
              <input
                type="date"
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Your Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-400 to-green-400 shadow-md hover:shadow-xl transition-all"
            >
              Submit
            </button>
          </form>

          {/* Map */}
          <div ref={mapRef}>
            <iframe
              title="Dentoi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.710300542511!2d75.78815781504453!3d26.917747783130934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3c9b1ef7f81%3A0x8b73b7589a31759d!2sAjmeri%20Gate%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1682074413240!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormForContact;
