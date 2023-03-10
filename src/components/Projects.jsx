import React from 'react'
import Button from './Button';
import Project from './Project';

function Projects() {
  return (
    <>
        <div className="mt-40 lg:mt-60 projects">

          <div className="px-2 lg:px-20">
            <div className="flex items-center justify-between">
              <div className="font-bold text-amber-900 lg:text-xl">( Featured Projects )</div>
              <div className="font-bold text-amber-900 lg:text-lg">( 2021 - 2023 )</div>
              <div className='hidden lg:flex'></div>
            </div>
          </div>

          <div className="mt-20 px-2 lg:px-20">
            <Project img="https://images.prismic.io/magnetism/e99b9ce9-8af4-4286-b1bf-ff8dc0c3c773_marie-brizard-preview.jpg?auto=compress,format&w=960" no={1} name="Royaltees Ecommerce"/>
            <Project img="https://images.prismic.io/magnetism/b3e7f6b8-62b8-49bf-9d29-19f953e1ca01_16_Hennessy_Couv.jpg?auto=compress,format&w=960" no={2} name="Codrops Blog"/>
            <Project img="https://images.prismic.io/magnetism/e99b9ce9-8af4-4286-b1bf-ff8dc0c3c773_marie-brizard-preview.jpg?auto=compress,format&w=960" no={3} name="Printing Agency Site"/>
            <Project img="https://images.prismic.io/magnetism/e99b9ce9-8af4-4286-b1bf-ff8dc0c3c773_marie-brizard-preview.jpg?auto=compress,format&w=960" no={3} name="Code Sharing Application"/>
            <div className="mt-20 flex justify-center">
              <Button>
                All Works
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects