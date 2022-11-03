import React from 'react'
import Contador from './Contador'
import { useState } from "react"
const itemDetail = ({product}) => {

  //const [show, setShow] = useState();

  //const onAdd = (show) => {
      
      //setCant(qty);
      //setShow(false);
  //};

  return (
    <>
    <div className='item-detail-card'>
        <div className="img-detail-container">
          <img src={product.img} className="detail" alt={product.title} />
        </div>
        
        <article className=''>
          <h2>{product.title}</h2>
          <h3>$ {product.price} .-</h3>
        </article>
  </div>
  <Contador stock={10} resta={0}  /*onAdd= {onAdd}*/ />
  </>
  )
}

export default itemDetail