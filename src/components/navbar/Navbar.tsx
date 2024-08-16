import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function navbar() {
   

  return (
    <>
        <div className='w-full bg-[#242424] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase text-red-300'>Farmacia UI</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline'>Postagens</Link>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default navbar