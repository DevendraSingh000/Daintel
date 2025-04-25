import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useInView } from 'framer-motion';
import FormSec from "../pages/FormSec";
import FooterSec from "../pages/FooterSec";

function Service() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const headlineRef = useRef(null);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll("span");
      gsap.fromTo(
        words,
        {
          opacity: 0,
          filter: "blur(8px)",
          y: 20,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);
  

  const text = "Outstanding Services for Exceptional Care";

  const services = [
    {
      title: "General Dentistry",
      description: "Maintain your oral health with our comprehensive general dentistry services. From routine cleanings and check-ups to cavity fillings and gum care, we ensure your teeth and gums remain healthy and strong. Preventive care is our priority to help you avoid future dental issues. Our team also provides personalized advice on daily oral hygiene for long-term wellness.",
      image: "https://framerusercontent.com/images/Yb2JWsOW7JCm1hTleoYmgY9FFg.webp",
      flip: false,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dentistry solutions. Whether you want teeth whitening, veneers, or a complete smile makeover, we tailor treatments to enhance your smile’s appearance and boost your confidence. Your dream smile is just a visit away. With cutting-edge techniques, we help you achieve a natural, radiant look that lasts.",
      image: "https://framerusercontent.com/images/aMeYAXO7TBAXHWToFR9LgZSJwQ.webp",
      flip: true,
    },
    {
      title: "Orthodontics",
      description: "Achieve a perfectly aligned smile with our orthodontic treatments. We offer options like traditional braces and clear aligners to correct misaligned teeth and bite issues. Our personalized approach ensures effective and comfortable care for patients of all ages. Straighten your teeth effortlessly and enjoy improved functionality and aesthetics.",
      image: "https://framerusercontent.com/images/jI55nCkRd9IXOCLUv7HcD1RJQc.webp",
      flip: false,
    },
    {
      title: "Pediatric Dentistry",
      description: "Our pediatric dentistry services are designed to provide gentle, effective care for children. From their first dental visit to regular check-ups, we ensure a comfortable and positive experience for young patients, building healthy habits early on.",
      image: "https://framerusercontent.com/images/nJ4Fs4DPODwCEVV6glHmKGgqdOo.webp",
      flip: true,
    },
    {
      title: "Dental Implants",
      description: "Restore your smile with durable and natural-looking dental implants. Designed to replace missing teeth, implants offer a long-lasting solution that looks, feels, and functions like your natural teeth. Regain confidence in your smile with expert care. Our customized solutions ensure comfort, stability, and a seamless smile transformation.",
      image: "https://framerusercontent.com/images/e3Hb1rZtmdulleuEZCnSagF9go.webp",
      flip: false,
    },
    {
      title: "Emergency Dental Care",
      description: "Get immediate relief for unexpected dental problems with our emergency care services. Whether it’s a toothache, broken tooth, or injury, our team is ready to provide prompt and effective treatment to address your urgent dental needs. We’re here to restore your comfort and oral health when you need it most.",
      image: "https://framerusercontent.com/images/XmsC3JyD7sjiD82950kThZuhCM.jpg?scale-down-to=1024",
      flip: true,
    },
  ];

  return (
    <section className="bg-[#F0F0F0]">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        ref={containerRef}
        className="relative z-10"
      >
        <div className="bg-[#F0F0F0]/20 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full z-0">
            <img
              src="https://framerusercontent.com/images/rxnlNFdtE9y0lBHLVHKBw8EU.webp?scale-down-to=2048"
              alt="Top Graphic"
              className="w-full h-[800px] object-cover"
            />
          </div>
          <div className="relative z-10 min-h-[400px] flex flex-col items-center justify-center pt-32 px-4 md:px-8 text-center">
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl flex flex-wrap justify-center gap-2"
            >
              {text.split(" ").map((word, index) => (
                <span key={index} className="inline-block">
                  {word}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl">
              Experience advanced dental technology, personalized care, and a
              seamless, patient-first approach.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      {services.map((service, index) => (
        <div key={index} className="relative z-10 py-12 px-4 md:px-8 bg-[#f0f0f0]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Image with Slide Animation */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-2xl border-4"
              />
            </motion.div>

            {/* Text with Slide Animation */}
            <div
              className="text-left"
            >
              <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible" className="mb-4 bg-[#f0f0f0] w-16 rounded-2xl shadow-2xl border-2 p-2">
                <img
                  src="https://img.icons8.com/ios-filled/100/tooth.png"
                  alt="Dentistry Icon"
                  className="w-12 h-12"
                />
              </motion.div>
              <motion.h2 variants={fadeRight}
              initial="hidden"
              animate="visible" className="text-2xl md:text-3xl font-bold mb-4">
                {service.title}
              </motion.h2>
              <motion.p variants={fadeRight}
              initial="hidden"
              animate="visible" className="text-gray-700 leading-relaxed">
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      ))}

      <FormSec />
      <FooterSec />
    </section>
  );
}

export default Service;
