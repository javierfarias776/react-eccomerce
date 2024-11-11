
import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Inicio'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShoppingCartContext from './context/shoppingCartContext'


const App = () => {
  
  return (
    <>
  <ShoppingCartContext>

  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path='/' element = {<Inicio/>}/>
    <Route exact path='/items' element ={<ItemListContainer/>}/>
    <Route exact path='/cart' element ={<Cart/>}/> 
    <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route
            exact
            path="/marca/:marca"
            element={<ItemListContainer />}
            />   
    </Routes>
    
  </BrowserRouter>
            </ShoppingCartContext>
  
    </>
    
  
  )
}

export default App
