import { useContext } from "react"
import { CartContext } from "../context/shoppingCartContext"
const Cart = () => {
  const {cart,setCart}= useContext(CartContext)
  console.log(cart)
  return (
    <div>

    </div>
  )
}

export default Cart