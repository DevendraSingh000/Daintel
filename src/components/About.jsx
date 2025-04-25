import { motion } from "framer-motion";
import FounderLaterSec from "../pages/FounderLaterSec";
import PersonalizedSec from "../pages/PersonalizedSec";
import ExpertTeamSec from "../pages/ExpertTeamSec";
import SpecialitySec from "../pages/SpecialitySec";
import FormSec from "../pages/FormSec";
import FooterSec from "../pages/FooterSec";

const About = () => {
  const headline = "Who We Are & Our Vision for Brighter Smiles";

  const wordVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2 + 1.2, duration: 0.5 },
    }),
  };

  return (
    <section className="relative bg-[#F0F0F0] overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full z-0">
        <img
          src="https://framerusercontent.com/images/rxnlNFdtE9y0lBHLVHKBw8EU.webp?scale-down-to=2048"
          alt="Top Graphic"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 bg-[#F0F0F0]/20 backdrop-blur-sm text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-4xl flex flex-wrap justify-center gap-2"
          initial="hidden"
          animate="visible"
        >
          {headline.split(" ").map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={wordVariant}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Transforming oral health with advanced solutions, compassionate care, and confident smiles.
        </motion.p>

        {/* Images Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 w-full max-w-6xl">
          {[
            "https://framerusercontent.com/images/oFQ1Xmr9vILY7UtKWsoqMzluV4.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/sYgokGJzeJuFu93VBZNJTu4AfxY.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/wLxhXsa4baAfb1jh1yqtHwaGbM.jpg?scale-down-to=1024",
          ].map((img, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md"
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <img src={img} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Following Sections */}
      <FounderLaterSec />
      <PersonalizedSec />
      <ExpertTeamSec />
      <SpecialitySec />
      <FormSec />
      <FooterSec />
    </section>
  );
};

export default About;
