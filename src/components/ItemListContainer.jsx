import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = ({saludo}) => {
  return (
    <>
    <h3>{saludo}</h3>
    <ItemCount stock= {10}/>
    </>
  )
}

export default ItemListContainer