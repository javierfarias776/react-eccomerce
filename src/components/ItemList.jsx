import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <>
      <div className='container'>

      <div className=' row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-5'>

        {productos.map((producto) => (
          <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          image={producto.image} />
        ))}
        </div>
      </div>
    </>
  )
}

export default ItemList