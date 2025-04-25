import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function TypingParagraph({ text, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, 20); // typing speed

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.p
      className="whitespace-pre-line"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      viewport={{ once: true }}
    >
      {displayedText}
    </motion.p>
  );
}

function FounderLaterSec() {
  const paragraphs = [
    "At Dentoi, our mission is rooted in the belief that every patient deserves personalized, high-quality dental care. Founded with a passion for improving oral health and enhancing smiles, we are committed to combining cutting-edge technology with compassionate care.",
    "We take pride in offering a welcoming and comfortable environment where patients can receive comprehensive treatment tailored to their individual needs. From routine check-ups to complex procedures, our team is here to ensure you feel at ease and confident in your care.",
    "Our hospital's core values center around trust, innovation, and excellence. Every member of our team shares the vision of providing exceptional dental services that focus not just on improving smiles, but on overall well-being. We believe in building long-term relationships with our patients and supporting them on their journey to optimal oral health.",
    "Thank you for choosing us as your dental care provider. We are excited to be a part of your health and smile transformation.",
    "Dr. Devendra Singh"
  ];

  return (
    <section className='h-full w-screen bg-[#F0F0F0] flex items-center justify-center'>
      <div className='bg-[#fff] w-[60%] rounded-2xl p-10 md:p-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Heading */}
          <motion.div
            className='md:w-[50%] text-3xl md:text-5xl font-semibold'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1>A Sincere Message from Our President to You</h1>
          </motion.div>

          {/* Image */}
          <motion.div
            className='rotate-12 rounded-2xl border-4 w-[150px] h-[200px] overflow-hidden'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://framerusercontent.com/images/Ey6EyRCuyPoAvqK0L9JCjK4N4Nk.jpg?scale-down-to=512"
              alt="Founder"
              className='h-full w-full object-cover rounded-2xl'
            />
          </motion.div>
        </div>

        {/* Typing Paragraphs */}
        <div className='mt-10 text-lg tracking-widest space-y-6'>
          {paragraphs.map((text, i) => (
            <TypingParagraph key={i} text={text} delay={i * 1.5} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FounderLaterSec;
