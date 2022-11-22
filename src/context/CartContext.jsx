import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

  const [cart, setCart] = useState([]);

    const addToCart = (product, qty) => {
      

      if (isInCart(product.id)) {
        sumarCantidad(product, qty)
      } else {

        setCart([...cart,{...product, qty}]); 
      }
    }



 

    
    const isInCart = (id) => {
        return cart.some ((prod) => prod.id === id);
    };

   
    const sumarCantidad = (productPorAgregar, qty) =>{
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (prodDelCarrito.id === productPorAgregar.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    qty,   
                }
                
                return productoActualizado;
            }else{
                return prodDelCarrito;
            }
        })

        setCart(cartActualizado);
    }

    
    const deleteAll = ()=> {
        setCart([])
    }
    

    const deleteOne= (id)=> {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados)
    }

    

    const totalPrecio = () =>{
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) =>{
            count = count += prod.qty  * prod.price;
        });
        return count;
    }

    

    const totalUnidades = () =>{
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) =>{
            count = count += prod.qty;
        });
        return count;
    }

    const cantidadDelProducto = (id) => {
        const product = cart.find((prod)=> prod.id ===id)
        return product?.count
    }
     
    
    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteOne, totalUnidades, cantidadDelProducto, totalPrecio}}>
           {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider

