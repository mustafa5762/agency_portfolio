import React from 'react'
import Button from './Button'

function Services() {
  return (
    <div className='mt-80 px-4 lg:px-40'>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-x-20 gap-y-20">


            <div className="border border-amber-900 rounded-full p-2.5 lg:p-4 text-center">
                <div className="border border-amber-500 rounded-full py-10  lg:py-20">
                    <div className="text-amber-900 font-bold text-2xl">Wedding Day</div>
                    <div className="text-amber-900 font-fancy text-6xl mt-6">5,990</div>
                    <div className="flex flex-col space-y-4 lg:space-y-6 px-4 lg:px-20 mt-10  lg:mt-16">
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold tracking-wide">Time</div>
                            <div className="text-amber-900 font-bold tracking-wide">5 - 7 Hours</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold tracking-wide">Package</div>
                            <div className="text-amber-900 font-bold tracking-wide">300 Photos</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold tracking-wide">Video</div>
                            <div className="text-amber-900 font-bold tracking-wide">On Timeline</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold tracking-wide">Delivery</div>
                            <div className="text-amber-900 font-bold tracking-wide">1 - 2 Months</div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Button>
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>


            <div className="border border-amber-900 rounded-full p-4 text-center">
                <div className="border border-amber-500 rounded-full py-20">
                    <div className="text-amber-900 font-bold text-2xl">Wedding Day</div>
                    <div className="text-amber-900 font-fancy text-6xl mt-6">5,990</div>
                    <div className="flex flex-col space-y-6 px-20 mt-16">
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Time</div>
                            <div className="text-amber-900 font-bold">5 - 7 Hours</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Package</div>
                            <div className="text-amber-900 font-bold">300 Photos</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Video</div>
                            <div className="text-amber-900 font-bold">On Timeline</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Delivery</div>
                            <div className="text-amber-900 font-bold">1 - 2 Months</div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Button>
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>


            <div className="border border-amber-900 rounded-full p-4 text-center">
                <div className="border border-amber-500 rounded-full py-20">
                    <div className="text-amber-900 font-bold text-2xl">Wedding Day</div>
                    <div className="text-amber-900 font-fancy text-6xl mt-6">5,990</div>
                    <div className="flex flex-col space-y-6 px-20 mt-16">
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Time</div>
                            <div className="text-amber-900 font-bold">5 - 7 Hours</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Package</div>
                            <div className="text-amber-900 font-bold">300 Photos</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Video</div>
                            <div className="text-amber-900 font-bold">On Timeline</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-amber-900 font-semibold">Delivery</div>
                            <div className="text-amber-900 font-bold">1 - 2 Months</div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Button>
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Services