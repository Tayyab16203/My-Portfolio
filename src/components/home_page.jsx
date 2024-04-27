import React from 'react'
import myPic from './images/my_pic.png'
import My_projects from './my_projects.jsx'
import About_me from './about_me.jsx'
import Contact_us from './contact_us.jsx'

const home_page = () => {
  return (
    <>
    <main id='home'>
      {/* introduction section */}
      <section  className='bg-dark border-b-4 border-lighting w-full h-{100vh} relative top-0 left-0 font-sans'>
        <div className='sm:mx-10 mx-auto'>
          <div className='flex lg:flex-row xs:flex-col xs:gap-5 justify-around items-center overflow-hidden p-10'>
            {/* image part */}
            <div className=' bg-[#0089b7] rounded-full overflow-hidden'>
              <span className='shadow-[1000]'>
                <img src={myPic} className='flex justify-center items-center bg-center w-80' alt="my_pic" />
              </span>
            </div>
            {/* intro part */}
            <div className='grid place-items-center'>
              <h1 className='text-white sm:text-3xl text-xl p-1 font-bold text-center'>
               <span className='text-secondary xl:text-7xl sm:text-5xl font-bold'>Hi</span>, i am <span className='xl:text-5xl sm:text-4xl font-bold'>Tayyab Rehman</span>
              </h1>
              <div className=''>
                <h2 className='animate_text whitespace-nowrap overflow-hidden mx-auto border-r-[6px] border-[#ffa500] text-white p-1 xl:text-6xl text-center sm:text-5xl text-xl font-bold'>Frontend Developer</h2>
              </div>
              <br />
              <p className='text-center p-1 font-medium text-white sm:text-xl w-[70%] xs:w-full max-w-[700px] xs:leading-1 sm:leading-2 mx-auto'>
                Passionate Frontend Developer. With a deep understanding of 
                ReactJS, I specialize in building dynamic and responsive user interfaces. I am skilled in front-end technologies,
                including HTML, CSS, JS and REACTJS. I am always eager to learn and stay up-to-date with the latest 
              </p>
            </div>
          </div>
        </div>
      </section>
      <My_projects/>
      <About_me/>
      <Contact_us/>
    </main>  
    </>
  )
}

export default home_page
