import Project2 from './images/Project2.png'
import Project3 from './images/project3.png'
import Project4 from './images/project4.png'
import Project5 from './images/project5.png'
import Project6 from './images/project6.png'
import Project9 from './images/project9.png'

const my_projects = () => {
  return (
    <>
    <section id="projects" className="bg-darker border-b-4 border-b-lighting py-10 'font-sans'">
        <div className="mx-10">
            <h1 className="text-secondary pb-10 text-center md:text-7xl xs:text-5xl font-bold">PROJECTS</h1>
            {/* grid system */}
            <div className='grid place-items-center lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <div className='group hover:scale-105 transition-all duration-500  sm:max-w-[300px] max-w-[200px]'>
                    <div className='flex flex-col items-center overflow-hidden rounded-lg '>
                        <img src={Project2} className='bg-contain group-hover:scale-105 group-hover:opacity-70 transition-all duration-500 w-full' alt="project2" />
                        {/* link part */}
                        <a href="">
                            <div className='px-[100px] py-5 relative top-[-4rem] mb-[-4rem] text-dark bg-white text-center text-2xl whitespace-nowrap font-bold translate-y-[100px] hover:cursor-pointer group-hover:translate-y-[0px] transition-all duration-500'>
                                <h1 className='animate_title overflow-hidden'>Job Application</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='group hover:scale-105 transition-all duration-500  sm:max-w-[300px] max-w-[200px]'>
                    <div className='flex flex-col items-center overflow-hidden rounded-lg'>
                        <img src={Project3} className='bg-contain group-hover:scale-105 group-hover:opacity-70 transition-all duration-500 w-full' alt="project3" />
                        {/* link part */}
                        <a href="">
                            <div className='px-[100px] py-5 relative top-[-4rem] mb-[-4rem] text-dark bg-white text-center text-2xl whitespace-nowrap font-bold translate-y-[100px] hover:cursor-pointer group-hover:translate-y-[0px] transition-all duration-500'>
                                <h1 className='animate_title overflow-hidden'>Parralex Website</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='group hover:scale-105 transition-all duration-500  sm:max-w-[300px] max-w-[200px]'>
                    <div className='flex flex-col items-center overflow-hidden rounded-lg '>
                        <img src={Project4} className='bg-contain group-hover:scale-105 group-hover:opacity-70 transition-all duration-500 w-full' alt="project4" />
                        {/* link part */}
                        <a href="">
                            <div className='px-[100px] py-5 relative top-[-4rem] mb-[-4rem] text-dark bg-white text-center text-2xl whitespace-nowrap font-bold translate-y-[100px] hover:cursor-pointer group-hover:translate-y-[0px] transition-all duration-500'>
                                <h1 className='animate_title overflow-hidden'>Landing page</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='group hover:scale-105 transition-all duration-500  sm:max-w-[300px] max-w-[200px]'>
                    <div className='flex flex-col items-center overflow-hidden rounded-lg '>
                        <img src={Project5} className='bg-contain group-hover:scale-105 group-hover:opacity-70 transition-all duration-500 w-full' alt="project5" />
                        {/* link part */}
                        <a href="">
                            <div className='px-[100px] py-5 relative top-[-4rem] mb-[-4rem] text-dark bg-white text-center text-2xl whitespace-nowrap font-bold translate-y-[100px] hover:cursor-pointer group-hover:translate-y-[0px] transition-all duration-500'>
                                <h1 className='animate_title overflow-hidden'>Restaorent Website</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='group hover:scale-105 transition-all duration-500  sm:max-w-[300px] max-w-[200px]'>
                    <div className='flex flex-col items-center overflow-hidden rounded-lg '>
                        <img src={Project6} className='bg-contain group-hover:scale-105 group-hover:opacity-70 transition-all duration-500 w-full' alt="project6" />
                        {/* link part */}
                        <a href="">
                            <div className='px-[100px] py-5 relative top-[-4rem] mb-[-4rem] text-dark bg-white text-center text-2xl whitespace-nowrap font-bold translate-y-[100px] hover:cursor-pointer group-hover:translate-y-[0px] transition-all duration-500'>
                                <h1 className='animate_title overflow-hidden'>Music Website</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='group hover:scale-105 transition-all duration-500  sm:max-w-[300px] max-w-[200px]'>
                    <div className='flex flex-col items-center overflow-hidden rounded-lg '>
                        <img src={Project9} className='bg-contain group-hover:scale-105 group-hover:opacity-70 transition-all duration-500 w-full' alt="project9" />
                        {/* link part */}
                        <a href="">
                            <div className='px-[100px] py-5 relative top-[-4rem] mb-[-4rem] text-dark bg-white text-center text-2xl whitespace-nowrap font-bold translate-y-[100px] hover:cursor-pointer group-hover:translate-y-[0px] transition-all duration-500'>
                                <h1 className='animate_title overflow-hidden'>Blog Website</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default my_projects
