import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext)
  
  return (
    <div style={{display:'flex', alignItems: 'center'}}>
      <span className="material-symbols-outlined"> shopping_cart_checkout </span>
      <span>{totalUnidades() !== 0 && totalUnidades()} </span>
      
    </div>
  )
}

export default CartWidget