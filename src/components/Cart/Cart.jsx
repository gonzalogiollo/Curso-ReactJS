import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    
    const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext) 
    if(cart.length === 0) return <h1>Aún no hay productos, volver al <Link to='/'>Inicio</Link></h1>
    return (
        <>
        <div className="container-checkout">
            {cart.map((prod) =>(
                <div>

                    <div  className="img-container">
                     <img className="img"  src={prod.img} alt={prod.title} width='150px'/>
                    </div>
                    

                    <div className='info-detalle-checkout'>
                        <h3>{prod.title}</h3>
                        <h3>{prod.price}</h3>
                        <button onClick={()=> deleteOne(prod.id)}>Eliminar producto </button>
                    </div>

                    
                    
                    
                            
                </div>
  
            ))}

        </div>
        <div className='info-checkout'>
             <h2> Total: $ {totalPrecio()}</h2>
             <button className="btn-detalle" onClick={deleteAll}>Vaciar carrito </button>
             <button className="btn-detalle"><Link to='/checkout'>Finalizar compra</Link></button>
           </div>
        </>
        
    );
};

export default Cart