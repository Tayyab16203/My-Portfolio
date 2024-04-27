import linkedin_icon from './icons/linkedin.png'
import twitter_icon from './icons/twitter.png'
import email_icon from './icons/email.png'
import github_icon from './icons/github.png'
import whatsapp_icon from './icons/whatsapp.png'

const contact_us = () => {
  return (
    <>
    <section id='contactus' className='sm:p-16 xs:px-2 xs:py-10 bg-darker font-sans'>
        <div className='mx-10'>
            <h1 className='text-secondary text-center md:text-6xl sm:text-5xl text-4xl font-bold'>Contact Us</h1>
            {/* grid system */}
            <div className='grid lg:place-items-center gap-7 lg:p-16 xs:px-0 sm:px-5 xs:py-5 w-full'>
                <h1 className='text-white font-bold lg:text-6xl md:text-4xl text-3xl'>Let's work together...</h1>
                <div className='w-full grid md:place-items-start lg:place-items-center lg:grid-cols-3  gap-7 text-white font-bold text-2xl'>
                    <a href='#' className='flex gap-1 items-center  '>
                        <img src={linkedin_icon} alt="linkedin_icon" />
                        Linkedin
                    </a>
                    <a href='#' className='flex gap-1 items-center '>
                        <img src={twitter_icon} alt="twitter_icon" />
                        Twitter
                    </a>
                    <a href='#' className='flex gap-1 items-center '>
                        <img src={email_icon} alt="email_icon" />
                        Send Mail
                    </a>
                </div>
                <div className='w-full grid lg:grid-cols-2 md:place-items-start lg:place-items-center gap-2 text-white font-bold text-2xl'>
                    <a href='#' className='flex gap-1 items-center'>
                        <img src={github_icon} className='' alt="github_icon" />
                        Github
                    </a>
                    <a href='#' className='flex gap-1 items-center whitespace-nowrap'>
                        <img src={whatsapp_icon} className='' alt="whatsapp_icon" />
                        +92-315-0626738
                    </a>
                </div>
            </div>
        </div>
    </section> 
    <footer>    
    <div className='bg-lighting text-center p-5 font-serif'>
            <h1 className='text-darker text-2xl font-medium'>Created By Tayyab Rehman</h1>
        </div>
    </footer>
    </>
  )
}

export default contact_us
