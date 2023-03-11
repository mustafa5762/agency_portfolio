import React from 'react'
import Marquee from 'react-fast-marquee'
import Transition from '../components/Transition'
import Typed from 'react-typed';


function About() {
  return (
    <div>
       <Transition/>

        <Marquee speed="50" gradient={false} className='border-b border-neutral-200 text-amber-900 font-fancy text-5xl py-6 lg:text-8xl overflow-hidden mt-6'>
            About  /  About  /  About  / About  /  About  / About  / <span style={{color:'#fffbeb'}}>f</span>
        </Marquee>

        <div className="mt-20 lg:mt-40 px-4 lg:px-20">
          <div className="font-fancy text-3xl lg:text-5xl text-amber-900">
            <Typed
                strings={["Hyālō","Konnichiwa",'Hello','Hola','Assalam-o-Alaikum','Ciao','Bonjour','Namaste','Marhaba', "Olá" ]}
                typeSpeed={40}
                loop
              />
          </div>
          <p className='my-6 text-lg lg:text-xl text-amber-900 tracking-wide lg:w-4/6 font-medium'>
            Cuberto is a full-service creative agency that specializes in [services provided]. With a team of experienced professionals, we pride ourselves on delivering high-quality work that exceeds our clients' expectations.
          </p>
          <p className='my-6 text-lg lg:text-xl text-amber-900 tracking-wide lg:w-4/6 font-medium'>
            At [agency name], we believe that every project is an opportunity to create something unique and impactful. We work closely with our clients to understand their goals and objectives, and then use our expertise to develop a custom strategy that aligns with their vision.
          </p>
          <p className='my-6 text-lg lg:text-xl text-amber-900 tracking-wide lg:w-4/6 font-medium'>
            Our range of services includes [list of services offered]. Whether you need a new website, a comprehensive branding campaign, or a social media strategy, we have the skills and expertise to deliver results.
          </p>
        </div>
    </div>
  )
}

export default About