import React from 'react'
import ListarCategorias from '../../components/card/ListarCategorias'

function Home() {
  return (
    <>
      <div className="bg-[#242419] flex justify-center">
        <div className='container text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
            <p className='text-xl'>Catalogo de produtos</p>
            <ListarCategorias />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home