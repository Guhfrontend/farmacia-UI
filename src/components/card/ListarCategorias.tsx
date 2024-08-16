import React, { useEffect, useState } from 'react'
import Categoria from '../../model/Categoria'
import { listar } from '../../service/service'
import CardCategorias from './CardCategorias'

function ListarCategorias() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);


  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategoria);
    } catch (error: any) {
      alert('Falha ao buscar categorias')
    }
  }
  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListarCategorias;
