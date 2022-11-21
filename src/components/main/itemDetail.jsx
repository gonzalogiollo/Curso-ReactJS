import React from 'react'
import {  useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Contador from './Contador'
import { useState } from "react"
import { Link } from 'react-router-dom'
const ItemDetail = ({product}) => {

  //ahora para guardar el numero que recibimos en onAdd y que renderizamos con qty, debemos hacerlo con un estad: 
  //const [cant, setCant] = useState(0)
  const [show, setShow] = useState(true);
  
  const { addToCart, cantidadDelProducto } = useContext (CartContext); // aca estamos creado el estado para ejecutarlo en la funcion onAdd para despues mostrar el numero y el producto en el carrito

  
  //la funcion onAdd se le pasa al hijo que es contador, ver abajo, se pasa por prop y la recibe en contador, ver contador con el onAdd linea4 
  //luego de que en contador se genera el call back y la funcion agregar genera el numero, lo envia de nuevo hacia itemDetail
  const onAdd = (qty) => {
    //console.log(qty)
    //setCant(qty) //aca ahora le pasamos el parametro al setCant y ya sabemos que lo guarda y luego el cant del useState va dejar de valer '0'
    
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