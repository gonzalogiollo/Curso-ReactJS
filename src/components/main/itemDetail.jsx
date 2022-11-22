import React from 'react'
import {  useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Contador from './Contador'
import { useState } from "react"
import { Link } from 'react-router-dom'
const ItemDetail = ({product}) => {

  const [show, setShow] = useState(true);
  
  const { addToCart, cantidadDelProducto } = useContext (CartContext); 

  const onAdd = (qty) => {
   
    setShow(false);
    addToCart(product, qty);  
  
  };

  const cantidad = cantidadDelProducto(product.id)

  return (
    <>
    <div className='detail'>
         
      <img src={product.img} className="detail" alt={product.title} />
        
      <article className=''>
        <h2>{product.title}</h2>
        <h3>$ {product.price} .-</h3>

        {show ?(
          <Contador stock={10} resta={0}  onAdd= {onAdd} initial={cantidad}/>
          ):(
          <Link to='/cart'>Ir al carrito</Link>
        )}
          
      </article>
  </div>
  
  </>
  )
}

export default ItemDetail