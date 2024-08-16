import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-[#242424] text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold text-red-300'>Farmacia UX Generation | Copyright: </p>
          <div className='flex gap-10'>
            <h1 className='font-bold text-red-300'>&copy; 2024 Farmacia UX</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer