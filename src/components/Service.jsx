import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Service() {
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

  const text = "Outstanding Services for Exceptional Care";

  return (
    <section className="bg-[#F0F0F0]">
      {/* Hero Section */}
      <div className="relative z-10">
        <div className=" bg-[#F0F0F0]/20 backdrop-blur-sm">
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
      </div>

      {/* Services Section */}
      <div className="relative z-10 py-12 px-4 md:px-8 bg-[#f0f0f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div>
            <img
              src="https://framerusercontent.com/images/Yb2JWsOW7JCm1hTleoYmgY9FFg.webp"
              alt="Dentistry Office"
              className="w-full h-auto rounded-2xl border-4"
            />
          </div>
          <div className="text-left">
            <div className="mb-4 bg-[#f0f0f0] w-16 rounded-2xl shadow-2xl border-2 p-2">
              <img
                src="https://img.icons8.com/ios-filled/100/tooth.png"
                alt="Dentistry Icon"
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              General Dentistry
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Maintain your oral health with our comprehensive general
              dentistry services. From routine cleanings and check-ups to
              cavity fillings and gum care, we ensure your teeth and gums
              remain healthy and strong. Preventive care is our priority to
              help you avoid future dental issues. Our team also provides
              personalized advice on daily oral hygiene for long-term wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
