
import Data from "../data.json"
import ItemList from './ItemList';



const ItemListContainer = () => {
  const getDatos = ()=>{
    return new Promise ((resolve, reject)=>{
      if(Data.length === 0){
        reject(new Error("no hay datos"))
      }
      setTimeout(()=>{
        resolve(Data)
      },3000);
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
    <ItemList productos = {Data}/>
    </>
  )
}

export default ItemListContainer