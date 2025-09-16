import React from 'react'
import { achievements } from '../../constants'

const Achievements = () => {
    return (
        <section
            id='achievements'
            className=" py-24 px-[7vw] md:px-[12vw] lg:px-[20vw] font-sans" >

            {/* Section Title */}
            <div className='text-center mb-16'>
                <h2 className='text-white text-4xl font-bold'>
                    ACHIEVEMENTS
                </h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-2'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of my achievements, highlighting my dedication and expertise.</p>
            </div>

            <div className='flex flex-wrap gap-4 justify-center p-4' >
                {achievements.map((achievement, index) => (
                    <div key={index} className=' w-full sm:w-80 md:w-96 bg-gray-900 backdrop-blur-md border border-white-500 rounded-2xl shadow-2xl overflow-hidden
                        hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 '>
                        <div className='p-3'>
                            <img
                                className='object-cover w-full h-64 rounded-md'
                                src={achievement.image}
                                alt={achievement.title} />
                        </div>
                        <div className='text-center py-4 cursor-pointer'>
                            <h1 className='text-white text-2xl sm:text-3xl font-semibold '>
                                {achievement.title}
                            </h1>
                            <p className='text-gray-400 text-base sm:text-xl py-3'>
                                {achievement.desc}
                            </p>
                        </div>


                    </div>


                ))}
            </div>

        </section>
    )
}

export default Achievements
