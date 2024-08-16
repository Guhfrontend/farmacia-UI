import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function navbar() {
   

  return (
    <>
        <div className='w-full bg-[#242424] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase text-red-300'>Farmacia UX</Link>

            <div className='flex gap-4'>

              <Link to='/categorias' className='hover:underline text-red-300 font-bold'>categoria</Link>
              <Link to='/cadastroCategoria' className='hover:underline text-red-300 font-bold'>Cadastrar categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default navbar