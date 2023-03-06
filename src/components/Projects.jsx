import React from 'react'
import Button from './Button';
import Project from './Project';

function Projects() {
  return (
    <>
        <div className="mt-40 lg:mt-60 projects">

          <div className="px-20">
            <div className="flex items-center justify-between">
              <div className="font-bold text-amber-900 text-xl">( Featured Projects )</div>
              <div className="font-bold text-amber-900 text-lg">( 2021 - 2023 )</div>
              <div></div>
            </div>
          </div>

          <div className="mt-20 px-40">
            <Project no={1} name="Royaltees Ecommerce"/>
            <Project no={2} name="Codrops Blog"/>
            <Project no={3} name="Printing Agency Site"/>
            <Project no={3} name="Code Sharing Application"/>
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