import { useState, createContext } from 'react';

// como en el app.js no se puede crear estados, ya que no esta dentro de las buenas practicas, lo que se hace es crear en este file el provider
// y se genera el estado, luego se pasa en el value el parametro del estado y en app lo que vamnos hacer es importar solo el Provider

export const CartContext = createContext();

const CartProvider = (props) => {

  const [cart, setCart] = useState([]);

  // crear copia del cart
  // const copia = [...cart]
  // const copia = cart.map ((prop) => prod)

   
  //hay que crear una nueva funcion en este caso addToCart para luego poder pasarla en el value 
    const addToCart = (product, qty) => {
      //console.log([...cart,{...product, qty}]);

      if (isInCart(product.id)) {
        sumarCantidad(product, qty)
      } else {

        setCart([...cart,{...product, qty}]); 
      }
    }



  console.log(cart);

    //creamos una funcion en paralelo a addToCart  usando el some para identificar los id de los productos y ver si esta en el carrito
    const isInCart = (id) => {
        return cart.some ((prod) => prod.id === id);
    };

    //___________________________funciones para manejar el carrito_____________________________________________

    // funcion para sumar la cantidad de un mismo producto
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

    // funcion para vaciar el carrito, para ejecutarla hay que definirla junto al cart en el value del provider, y llamarla desde la vista cart
    const deleteAll = ()=> {
        setCart([])
    }
    // funcion para eliminar un solo producto
    const deleteOne= (id)=> {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados)
    }

    // funcion para sumar total de $ del carrito

    const totalPrecio = () =>{
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) =>{
            count = count += prod.qty  * prod.price;
        });
        return count;
    }

    // fundion para sumar unidades del carrito (cartWidget) 

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
     
    //_________________________________________________________________________________________________________

    // el provider del return es el que viene propio del context, no tiene nada que ver con el CartProvider que se importa en el app.js, 
    // en el return si lo dejamos asi no se va a ver nada, ya que hay que pasar los hijos (children de CartProvider del app), al cartContext.provider del return. 
    // como son children pasan por props.children al cartProvider
    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteOne, totalUnidades, cantidadDelProducto, totalPrecio}}>
           {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider

