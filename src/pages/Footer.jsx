import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const contactLinks = [
    { label: '+91 9730627087', href: 'tel:+919730627087' },
    { label: 'abc@dentoi.com', href: 'mailto:abc@dentoi.com' },
    { label: 'Write to us', href: '#' },
  ];

  const quickLinks = ['About', 'Services', 'Privacy Policy', 'Cookie Policy'];

  return (
    <section className="bg-[#f0f0f0] w-full sm:pt-20">
      <footer className="bg-gradient-to-b from-[#d6fdfd] to-white py-10 px-40  w-screen  text-[#222]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo + About */}
          <div>
            <h1 className="text-3xl font-extrabold">DENTOI</h1>
            <p className="text-sm mt-3 max-w-sm">
              Dentoi Clinic offers exceptional dental care with personalized treatments for healthy, beautiful smiles.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold text-lg mb-3">Contact</h2>
            <ul className="space-y-2">
              {contactLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="relative inline-block group overflow-hidden">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300 text-sm text-gray-700">
                      {link.label}
                    </span>
                    <span className="absolute left-0 top-full group-hover:top-0 transition-all duration-300 text-sm text-black">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h2 className="font-bold text-lg mb-3">Quick Access</h2>
            <ul className="space-y-2">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a href="#" className="relative inline-block group overflow-hidden">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300 text-sm text-gray-700">
                      {item}
                    </span>
                    <span className="absolute left-0 top-full group-hover:top-0 transition-all duration-300 text-sm text-black">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h2 className="font-bold text-lg mb-3">Social Connect</h2>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <FaInstagram className="text-[#E1306C]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <FaFacebookF className="text-[#1877F2]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <FaWhatsapp className="text-[#25D366]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className='flex items-center justify-center border-t-2'>
        <div className='h-[80px] flex items-center justify-between w-[80%] p-10 '>
          <h1 className='text-lg'>All rights reserve @Dentoi</h1>
          <p className='text-lg'>Created by <span className='text-[#4ad6db] font-bold'>DEVENDRA SINGH</span></p>
        </div>
      </div>

    </section>
  );
};

export default Footer;
