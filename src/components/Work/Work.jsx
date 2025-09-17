import React, { useState } from 'react'
import { projects } from '../../constants'
import { FiX } from 'react-icons/fi';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModel = (project) => {
    setSelectedProject(project);
  }
  return (
    <section
    id='work'
    className='relative py-24 pb-24 px-[12vw] md:px-[7vw] xl:[20vw] font-sans'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-white text-4xl font-bold'>
          PROJECTS
        </h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      {/* Project Grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <div
          key={index}
          onClick={() => handleOpenModel(project)}
          className='border  border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer
          hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'>
            <div className='p-4'>
              <img 
              src={project.image} 
              alt={project.title}
              className='w-full h-48 object-cover rounded-xl'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl text-white font-bold mb-2'> {project.title} </h3>
              <p className=' text-gray-500 mb-4 pt-4 line-clamp-3 '>{project.description}</p>
              <ul className='mb-4 flex flex-wrap '>
                {project.tags.map((tag, index) => (
                    <li 
                    key={index}
                    className='text-white bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'>
                      {tag}
                    </li>
                ))}
              </ul>

            </div>

          </div>
        ))}
      </div>

      Model Container
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className=' relative bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden'>
            <div className='flex justify-end p-4'>
              <FiX 
              className='cursor-pointer text-3xl   text-white hover:scale-125 hover:text-[#8245ec]' 
              onClick={() => {setSelectedProject(null)}} />       
            </div>

            <div className='flex flex-col'>
              <div className='h-full w-full flex justify-center   '>
                <img 
                className='w-[85%] sm:w-[95%] h-full object-contain overflow-hidden rounded-lg'
                src={selectedProject.image} 
                alt={selectedProject.title} />
              </div>

              <div className='lg:p-8 p-6 '>
                <h1 className='text-white text-md  sm:text-3xl font-bold'>{selectedProject.title}</h1>
                <p className='text-gray-400 text-xs sm:text-base mb-3 py-4'>{selectedProject.description}</p>

                <ul className='flex flex-wrap mb-6'>
                    {selectedProject.tags.map((tag, index) => (
                      <li
                      key={index}
                      className='bg-[#251f38]  text-xs font-semibold text-purple-500 px-2 py-1 mr-3 bg-opacity-50 rounded-full '
                      >
                        {tag}
                      </li>
                    ))}
                </ul>
                    {/*Code and Live Buttons  */}
                <div className='flex justify-center'>
                   <a 
                   href={selectedProject.github}
                   target='_blank'
                   rel='noopener noreferrer'
                   className=' w-1/2  font-semibold  text-sm sm:text-xl text-gray-400 bg-gray-400 mr-4 bg-opacity-20 text-center py-2 rounded-xl hover:bg-[#40158a]'
                   >View Code</a>

                   <a 
                   href={selectedProject.webapp}
                   target='_blank'
                   rel='noopener noreferrer'
                   className='w-1/2 font-semibold  text-sm sm:text-xl text-white bg-[#8245ec]  text-center   py-2 rounded-xl hover:bg-[#40158a]'
                   >
                    View Live
                   </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      )}
    </section>
  )
}

export default Work