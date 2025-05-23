import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>MC</h1>
      <nav className='items-center md:flex hidden gap-12'>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 '>Company</a>
             <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 '>Company</a>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 '>Company</a>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300 z-50 '>Company</a>

     
     
      </nav>


      <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium  transition-all duration-500 hover:bg-white cursor-pointer z-50'>signup</button>




      <button></button>
    </header>
  )
}

export default Header
