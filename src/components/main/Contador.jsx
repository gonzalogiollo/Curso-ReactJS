import React from 'react'
import { useState } from 'react';

const Contador = ({stock, resta, onAdd}) => {

    const [count, setCount] = useState(0)
    //let x = 0;
    const sumar = () => {
        //se paso la cantidad de stock por prop y se hace la validacion para no seguir sumando mas de 10 productos
        if(count < stock) {
          setCount(count + 1);
        };
    };

    const restar = () => {
        if (count > resta) {

            setCount(count - 1);
        }
        
    }

    const reset = () =>{
        setCount(0);

    }

    const agregar = () => {
      onAdd(count);
  };

  return (
    <div className='counter'>
        <section>
          <button className='button' disabled= {count === stock} onClick={sumar}>+</button>
          <p>{count}</p> 
          <button className='button' disabled= {count === resta} onClick={restar}>-</button>
          <button className='button' onClick={reset}>volver a 0</button>
        </section>
        

        <button className="add" onClick={agregar}>
                    Agregar al carrito
                </button>
    </div>
  )
}

export default Contador