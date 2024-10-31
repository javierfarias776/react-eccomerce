import React from 'react'
import Data from "../data.json"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const getDatos = ()=>{
    return new Promise ((resolve, reject)=>{
      if(Data.length === 0){
        reject(new Error("no hay datos"))
      }
      setTimeout(()=>{
        resolve(Data)
      });
    });
  };

  //getDatos().then((Data)=>console.log(Data))
  //proceso asincrono

 async function fetchingData() {
  try{
    const datosFetched = getDatos()
    console.log(datosFetched)
  }catch(err){
    console.log(err)
  }
 }

 fetchingData()
  return (
    <>
  <ItemDetail productos = {Data}/>
    </>
  )
}

export default ItemDetailContainer