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

    /* para que se ejecute la funcion onAdd hay que agregarle un callback ()=>, sino se ejecuta automaticamente cada vez que recargue la pagina</div>*/
    //ver que en la linea de agregar al carrio en el onClick, se quito el onAdd y se paso la funcion que es la que tiene el callback dentro.
    //luego una vez ejecutada, lo que hace es pasar el numero con la funcion a su padre itemDetail quien lo recibe en la funcion onAdd y lo renderiza con el parametro qty (este lo establecemos nosotros y puede ser cualquier palabra) ver en itemDetail
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