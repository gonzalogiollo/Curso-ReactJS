import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    
    const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext) 
    if(cart.length === 0) return <h1>Aún no hay productos, volver al <Link to='/'>Inicio</Link></h1>
    return (
        <div>
            {cart.map((prod) =>(
                <div>
                    <img src={prod.img} alt={prod.title} width='150px'/>

                    <div>
                        <h3>{prod.title}</h3>
                        <h3>{prod.count}</h3>
                        <button onClick={()=> deleteOne(prod.id)}>Eliminar producto </button>
                    </div>

                    
                    
                </div>
  
            ))}

            <h2> Total: $ {totalPrecio()}</h2>
            <button onClick={deleteAll}>Vaciar carrito </button>
            <button><Link to='/checkout'>checkout</Link></button>

        </div>
     
    );
};

export default Cart