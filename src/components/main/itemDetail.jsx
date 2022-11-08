import React from 'react'
import Contador from './Contador'
//import { useState } from "react"
const ItemDetail = ({product}) => {

  //ahora para guardar el numero que recibimos en onAdd y que renderizamos con qty, debemos hacerlo con un estad: 
  //const [cant, setCant] = useState(0)

  
  //la funcion onAdd se le pasa al hijo que es contador, ver abajo, se pasa por prop y la recibe en contador, ver contador con el onAdd linea4 
  //luego de que en contador se genera el call back y la funcion agregar genera el numero, lo envia de nuevo hacia itemDetail
  const onAdd = (qty) => {
      console.log(qty)
     //setCant(qty) //aca ahora le pasamos el parametro al setCant y ya sabemos que lo guarda y luego el cant del useState va dejar de valer '0'
  };

  

  

  return (
    <>
    <div className='detail'>
         
      <img src={product.img} className="detail" alt={product.title} />
        
        
      <article className=''>
          <h2>{product.title}</h2>
          <h3>$ {product.price} .-</h3>
          <Contador stock={10} resta={0}  onAdd= {onAdd} />
      </article>
  </div>
  
  </>
  )
}

export default ItemDetail