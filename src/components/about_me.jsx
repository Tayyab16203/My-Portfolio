import React from 'react'

const about_me = () => {
  return (
    <>
    <section id='aboutme' className='bg-dark font-sans py-10'>
        <div className='mx-10'>
            <h1 className='text-secondary md:text-7xl xs:text-5xl text-center font-bold pb-10'>About Me</h1>
        </div>
        {/* grid system */}
        <div className='grid lg:p-10 md:px-20 xs:px-5 lg:grid-cols-2 lg:place-items-start xs:place-items-center gap-5'>
            <div className='w-full bg-darker p-7 rounded-lg shadow-lg'>
                <h1 className='text-white leading-none font-medium text-2xl'>
                👋 Hi there! I’m Tayyab Rehman, a creative and detail-oriented Front-End Developer with a passion for crafting delightful user experiences. Here’s what you should know about me: 
                </h1>
                <div className='pt-5 w-[80%] text-white leading-none'>
                    <ul className='list-disc pl-4'>
                        <li className='pt-2 '>
                            <span className='text-secondary text-xl font-bold'>Skills: </span> Proficient in HTML, CSS, and JavaScript. I love turning design concepts into pixel-perfect, responsive web interfaces.
                        </li>
                        <li className='pt-2'>
                            <span className='text-secondary text-xl font-bold'>Frameworks: </span> Experienced with React and Node.js. I enjoy building interactive components and dynamic UIs.
                        </li>
                        <li className='pt-2'>
                            <span className='text-secondary text-xl font-bold'>Problem Solver: </span> I thrive on solving complex challenges. Whether it’s optimizing performance or enhancing accessibility, count me in!
                        </li>
                        <li className='pt-2'>
                            <span className='text-secondary text-xl font-bold'>Collaborator: </span> I believe great projects are born from collaboration. I enjoy working closely with designers, back-end developers, and stakeholders. 
                        </li>
                        <li className='pt-2'>
                            <span className='text-secondary text-xl font-bold'>Continuous Learner: </span> The tech world evolves rapidly, and I’m committed to staying up-to-date. Learning is a lifelong journey for me.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full '>
                {/* inner grid system */}
                <div className='grid gap-5'>
                    <div className='bg-darker p-5 rounded-lg shadow-md'>
                        <h1 className='text-secondary text-2xl font-bold text-center'>SKILLS</h1>
                        <ul className=' border-l-4 px-4 border-lighting rounded-lg'>
                            <li className='text-white text-xl font-medium'>HTML5</li>
                            <li className='text-white text-xl font-medium'>CSS3</li>
                            <li className='text-white text-xl font-medium'>JavaScript</li>
                            <li className='text-white text-xl font-medium'>Reactjs</li>
                            <li className='text-white text-xl font-medium'>Nodejs</li>
                        </ul>
                    </div>
                    <div className='bg-darker p-5 rounded-lg shadow-md'>
                    <h1 className='text-secondary text-2xl font-bold text-center'>FRAMEWORKS</h1>
                        <ul className=' border-l-4 px-4 border-secondary rounded-lg'>
                            <li className='text-white text-xl font-medium'>Tailwind Css</li>
                            <li className='text-white text-xl font-medium'>Reactjs</li>
                            <li className='text-white text-xl font-medium'>Bootstrap</li>
                            <li className='text-white text-xl font-medium'>Nodejs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default about_me
