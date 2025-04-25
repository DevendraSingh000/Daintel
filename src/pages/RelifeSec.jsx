import React from 'react';

function RelifeSec() {
  return (
    <section
      className="relative w-full py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-ec7f6823ec2b?auto=format&fit=crop&w=1920&q=80')` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-[350px] sm:h-[450px] md:h-[650px] flex flex-col justify-center items-center text-white px-4 py-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl leading-tight">
          We promise complete relief
        </h1>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10 w-full sm:w-[90%] max-w-5xl">
          {/* Box 1 */}
          <div className="sm:border-r sm:border-white text-center px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold">A+</h2>
            <p className="text-base sm:text-lg mt-2">Standards</p>
          </div>

          {/* Box 2 */}
          <div className="text-center px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold">2000+</h2>
            <p className="text-base sm:text-lg mt-2">Successful Operations</p>
          </div>

          {/* Box 3 */}
          <div className="sm:border-l sm:border-white text-center px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold">12+</h2>
            <p className="text-base sm:text-lg mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelifeSec;
