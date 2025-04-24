import React from 'react'

function Reaches() {
  return (
    <>
      <section className='bg-[#F0F0F0]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12 lg:mx-20 py-12 sm:py-16'>

          <div className='flex justify-center items-center gap-3 py-5 shadow-md shadow-black/40 rounded-2xl border-r lg:border-r'>
            <span className='text-xl sm:text-2xl'>O</span>
            <h1 className='text-[#6E6E6E] text-base sm:text-lg'>2000+ Reviews</h1>
          </div>

          <div className='flex justify-center items-center gap-3 py-5 shadow-md shadow-black/40 rounded-2xl border-r lg:border-r'>
            <span className='text-xl sm:text-2xl'>O</span>
            <h1 className='text-[#6E6E6E] text-base sm:text-lg'>4.5+ Rating</h1>
          </div>

          <div className='flex justify-center items-center gap-3 py-5 shadow-md shadow-black/40 rounded-2xl'>
            <span className='text-xl sm:text-2xl'>O</span>
            <h1 className='text-[#6E6E6E] text-base sm:text-lg'>MDCO Verified</h1>
          </div>

        </div>
      </section>


    </>
  )
}

export default Reaches
