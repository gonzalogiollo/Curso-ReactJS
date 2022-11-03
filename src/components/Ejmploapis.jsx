import React from 'react'
import { useEffect, useState } from 'react'

const Ejmploapis = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        
        .then((res)=> res.json())
        .then ((res) => setData(res))
        .catch((error)=>{
            console.log(error)
        });
    },[])
  return (
    <div>
        {data.map((producto) => (

            <div key= {producto.id} className='item'>
              <img src={producto.image} width='200px' alt={producto.title} />
               <article className='info'>
                   <h2>{producto.title}</h2>
                   <h3>$ {producto.price} .-</h3>

                </article>
            </div>
        ))}
    </div>
  )
}

export default Ejmploapis