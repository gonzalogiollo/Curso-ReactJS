import React from 'react'
import { useState } from 'react';

const Contador = ({stock, resta, onAdd, initial = 1}) => {

    const [count, setCount] = useState(initial)
   
    const sumar = () => {
        
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
         <p>{count}</p> 
          <div>
            <button  disabled= {count === stock} onClick={sumar}>+</button>
            <button  disabled= {count === resta} onClick={restar}>-</button>
            <button  onClick={reset}>volver a 0</button>
          </div>
          
        </section>
       
          
        
        <div>
          
         <button className="add" onClick={(agregar)}> 
           Agregar al carrito
         </button>


        </div>
        

        
    </div>
  )
}

export default Contador