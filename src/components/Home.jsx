import React from 'react'
import HeroSec from '../pages/HeroSec';
import ReachesSec from '../pages/ReachesSec';
import PersonalizedSec from '../pages/PersonalizedSec';
import SpecialitySec from '../pages/SpecialitySec';
import ExpertTeamSec from '../pages/ExpertTeamSec';
import RelifeSec from '../pages/RelifeSec';
import PatientReplyesSec from '../pages/PatientReplyesSec';
import ReputationSec from '../pages/ReputationSec';
import BlogPostSec from '../pages/BlogPostSec';
import FormSec from '../pages/FormSec';
import FooterSec from '../pages/FooterSec';


function Home() {
  return (
    <>
      <section className='bg-[#F0F0F0]'>
        {/* <div className="fixed top-0 left-0 w-full h-full -z-50">
          <img
            className="w-full h-full object-cover"
            src="https://framerusercontent.com/images/4fQiyE7roOkTchB1ODPi4Ffi0.webp"
            alt="Background"
          />
        </div> */}
        <HeroSec />
        <ReachesSec />
        <PersonalizedSec />
        <SpecialitySec />
        <ExpertTeamSec />
      </section>
        <RelifeSec />
        <PatientReplyesSec />
        <ReputationSec />
        <BlogPostSec />
        <FormSec />
        <FooterSec />


    </>
  );
}

export default Home;
