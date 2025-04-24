import React from 'react'
import Personalized from './PersonalizedSec'

function FounderLater() {
    return (
        <>
            <section className='h-full w-screen bg-[#F0F0F0] flex items-center justify-center'>
                <div className='bg-[#fff]  w-[60%] rounded-2xl p-16 '>
                    <div className='flex  items-center justify-between'>
                        <div className='w-[50%]  text-5xl'>
                            <h1>A Sincere Message from Our President to You</h1>
                        </div>
                        <div className=' rotate-12 rounded-2xl border-4 w-[150px]'>
                            <img
                                src="https://framerusercontent.com/images/Ey6EyRCuyPoAvqK0L9JCjK4N4Nk.jpg?scale-down-to=512"
                                alt=""
                                className='h-[200px] rounded-2xl overflow-hidden w-[150px] object-cover'
                            />
                        </div>
                    </div>
                <div className='mt-10 text-lg tracking-widest'>
                   <p>At Dentoi, our mission is rooted in the belief that every patient deserves personalized, high-quality dental care. Founded with a passion for improving oral health and enhancing smiles, we are committed to combining cutting-edge technology with compassionate care.</p>
                   <br />
                   <p> We take pride in offering a welcoming and comfortable environment where patients can receive comprehensive treatment tailored to their individual needs. From routine check-ups to complex procedures, our team is here to ensure you feel at ease and confident in your care.</p>
                   <br />
                   <p>Our hospital's core values center around trust, innovation, and excellence. Every member of our team shares the vision of providing exceptional dental services that focus not just on improving smiles, but on overall well-being. We believe in building long-term relationships with our patients and supporting them on their journey to optimal oral health.  
                   </p>
                   <br />
                   <p>Thank you for choosing us as your dental care provider. We are excited to be a part of your health and smile transformation.</p>
                   <br />
                   <p>Dr.Devendra Singh</p>
                </div>
                </div>
                
            </section>
        </>
    )
}

export default FounderLater
