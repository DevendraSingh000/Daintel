import React from 'react'

function RelifeSec() {
    return (
        <>
            <section className="relative w-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"></div>

                {/* Content */}
                <div className="relative z-10 h-[300px] sm:h-[400px] md:h-[700px] flex flex-col items-center justify-around text-white px-4">
                    {/* Title */}
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
                        <h1>We promise complete relief</h1>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row items-center justify-around w-full sm:w-[90%] text-center gap-6 sm:gap-0 mt-6 sm:mt-0">
                        {/* Box 1 */}
                        <div className="sm:border-r-2 border-white rounded-lg w-full sm:w-1/3 py-4 px-2">
                            <h1 className="text-5xl sm:text-4xl md:text-5xl font-semibold">A+</h1>
                            <p className="text-base sm:text-lg mt-2">Standards</p>
                        </div>

                        {/* Box 2 */}
                        <div className=" border-white w-full sm:w-1/3 py-4 px-2">
                            <h1 className="text-5xl sm:text-4xl md:text-5xl font-semibold">2000+</h1>
                            <p className="text-base sm:text-lg mt-2">Successful Operations</p>
                        </div>

                        {/* Box 3 */}
                        <div className=" sm:border-l-2  w-full rounded-lg text-center flex flex-col items-center sm:w-1/3 py-4 px-2">
                            <h1 className="text-5xl sm:text-4xl md:text-5xl font-semibold">12+</h1>
                            <p className="text-base sm:text-lg mt-2">Experience</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RelifeSec
