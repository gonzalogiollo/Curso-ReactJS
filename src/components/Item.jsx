import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='item'>
      <div className="img-container">
        <img src={item.img} className="img" alt={item.title} />
      </div>
      <article className='info'>
        <h2>{item.title}</h2>
        <div className='info-price'>
          <h3>$ {item.price} .-</h3>
        </div>
        
        <Link className="btn-detalle" to= {`/detail/${item.id}`}> Ver detalle </Link>

      </article>
  </div>
  )
}

export default Item;
