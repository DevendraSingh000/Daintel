import React from 'react'
import Speciality from '../pages/speciality';
import Hero from '../pages/hero';
import ExpertTeam from '../pages/expertTeam';
import Relife from '../pages/relife';
import PatientReplyes from '../pages/PatientReplyes';
import Reputation from '../pages/reputation';
import BlogPost from '../pages/BlogPost';
import From from '../pages/Form';
import Footer from '../pages/footer';
import Reaches from '../pages/reaches';
import PersonalizedSec from '../pages/PersonalizedSec';

function Home() {
  return (
    <>
      <section className='bg-[#F0F0F0]'>
        <div className="fixed top-0 left-0 w-full h-full -z-50">
          <img
            className="w-full h-full object-cover"
            src="https://framerusercontent.com/images/4fQiyE7roOkTchB1ODPi4Ffi0.webp"
            alt="Background"
          />
        </div>
        <Hero />
        <Reaches />
        <PersonalizedSec />
        <Speciality />
        <ExpertTeam />
      </section>
        <Relife />
        <PatientReplyes />
        <Reputation />
        <BlogPost />
        <From />
        <Footer />


    </>
  );
}

export default Home;
