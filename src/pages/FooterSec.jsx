import React, { useRef } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const FooterSec = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contactLinks = [
    { label: '+91 8764675841', href: 'tel:+919730627087' },
    { label: 'abc@dentoi.com', href: 'mailto:abc@dentoi.com' },
    { label: 'Write to us', href: '#' },
  ];

  const quickLinks = ['About', 'Services', 'Privacy Policy', 'Cookie Policy'];

  return (
    <section className="bg-[#f0f0f0] pt-10 w-full">
      <motion.footer
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="bg-gradient-to-b from-[#d6fdfd] to-white py-10 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-40 w-full text-[#222]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + About */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">DENTOI</h1>
            <p className="text-sm mt-3 max-w-sm text-[#444]">
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
      </motion.footer>

      {/* Bottom Bar */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="border-t-2 border-gray-300"
      >
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-5">
          <h1 className="text-sm sm:text-base text-center">All rights reserved © DENTOI</h1>
          <p className="text-sm sm:text-base text-center">
            Created by <span className="text-[#4ad6db] font-bold">Primewebdev</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSec;
