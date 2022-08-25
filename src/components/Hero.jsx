import React from 'react'
import{CloudUploadIcon,
DatabaseIcon,
PaperAirplaneIcon,
ServerIcon}  from '@heroicons/react/solid';
function Hero() {
  return (
    <div className='w-full h-screen  flex flex-col justify-between bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className='grid md:grid-col-2 max-w-[1240px] m-auto ' >
<div className='flex flex-col justify-center md:items-start w-full px-2 py-8' >
    <p className='text-2xl' >
        Unique Sequencing & Production
    </p>
    <h1 className='py-3 text-5xl md:text-7xl font-bold' >Cloud Management</h1>
    <p className='text-2xl' >This is our Tech brand.</p>
    <button className='py-3 px-6 sm:w-[60%] my-4' >Get Started</button>
</div>
<div  className=''>
<img src="hero-back" alt="" />
</div>
        </div>

    </div>
  )
}

export default Hero