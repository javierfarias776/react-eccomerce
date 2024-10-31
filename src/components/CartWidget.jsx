import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <>
            <div>
                <Link to ="/cart">
                <button type="button" className="btn btn-primary position-relative">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                        
                    </span>
                </button>
                </Link>


            </div>

        </>
    )
}

export default CartWidget