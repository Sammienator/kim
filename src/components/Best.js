import React from 'react'

const Best = () => {
  return (
    <div className='text-center bg-[#E3BC62] pt-12 pb-12 text-3xl'>
        <h1 className='text-[#224F34] pt-10 mb-8'>BEST SELLING</h1>

        <nav className='text-center bg-[#E3BC62] pt-12 mb-6 text-xl' id='pop' class="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center md:space-x-10  ">
      <a href='#sale' class="mr-5 hover:text-gray-900  cursor-pointer">SALE</a>
      <a href='#hot' class="mr-5 hover:text-gray-900  cursor-pointer">HOT</a>
      <a href='#newarrivals' class="mr-5 hover:text-gray-900 cursor-pointer underline">NEW ARRIVALS</a>
      <a href='#accessories' class="mr-5 hover:text-gray-900 cursor-pointer">ACCESSORIES</a>
     
    </nav>
    </div>
  )
}

export default Best