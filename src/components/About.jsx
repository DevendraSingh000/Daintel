import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ExpertTeam from "../pages/expertTeam";
import Speciality from "../pages/speciality";
import From from "../pages/Form";
import Footer from "../pages/footer";
import FounderLater from "../pages/FounderLater";
import Personalized from "../pages/personalized";

function About(props) {
  const headlineRef = useRef(null);

  useEffect(() => {
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
  }, []);

  const text = "Who We Are & Our Vision for Brighter Smiles";

  return (
    <>
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
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-4xl flex flex-wrap justify-center gap-2"
        >
          {text.split(" ").map((word, index) => (
            <span key={index} className="inline-block">
              {word}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl">
          Transforming oral health with advanced solutions, compassionate care, and confident smiles.
        </p>

        {/* Images Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 w-full max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-md ">
            <img
              src="https://framerusercontent.com/images/oFQ1Xmr9vILY7UtKWsoqMzluV4.jpg?scale-down-to=1024"
              alt="Dental Checkup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://framerusercontent.com/images/sYgokGJzeJuFu93VBZNJTu4AfxY.jpg?scale-down-to=1024"
              alt="Clinic Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://framerusercontent.com/images/wLxhXsa4baAfb1jh1yqtHwaGbM.jpg?scale-down-to=1024"
              alt="Closeup Smile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <FounderLater />
      <Personalized  />
      <ExpertTeam />
      <Speciality/>
      <From />
      <Footer />
      
    </section>
    </>
  );
}

export default About;
