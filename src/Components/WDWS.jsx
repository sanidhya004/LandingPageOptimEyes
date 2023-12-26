import React from 'react'

const WDWS = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-20 gap-10 overflow-x-hidden">
        <div className='text-center'>
            <p className='text-4xl text-blue-800 mb-2'>Who do we Serve</p>
            <p>Create Your Personalized Dashboard – Free Risk Assessment
Convert cyber-uncertainty into cyber intelligence In near-real time</p>
        </div>
        <div className='flex justify-center items-center gap-6 px-4 flex-wrap'>
            <div className='sm:h-[500px] sm:w-[300px] shadow-lg  h-[300px] w-[250px] flex flex-col items-center py-7 '>
                 <p className='sm:text-3xl font-semibold text-xl'>CISO</p>
                 <p className='sm:text-xl font-light text-xs'>Cyber Risk Governance</p>

            </div>
            <div className='sm:h-[500px] sm:w-[300px] shadow-lg  h-[300px] w-[250px]  flex flex-col items-center py-7 '>
                <p  className='sm:text-3xl font-semibold text-xl'>CFO</p>
                <p className='sm:text-xl font-light text-xs'>Annual Loss Expectancy $</p>
            </div>
            <div className='sm:h-[500px] sm:w-[300px] shadow-lg  h-[300px] w-[250px] flex flex-col items-center py-7  '>
                <p className='sm:text-3xl font-semibold text-xl'>CIO/CDO</p>
                <p className='sm:text-xl font-light text-xs'>Digital Acceleration</p>
            </div>

        </div>

    </div>
  )
}

export default WDWS