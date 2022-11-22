import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../Services/firebaseConfig';

const Form = () => {
   const [name, setName] = useState(''); 
   const [lastname, setLastName] = useState('');
   const [telefono, setTelefono] = useState('');
   const [direccion, setDireccion] = useState('');
   const [Email, setEmail] = useState('');
   const [Email2, setEmail2] = useState('');


   const [orderId, setOrderId] = useState('');


   const { cart, totalPrecio, deleteAll } = useContext(CartContext);
   const totalCarrito = totalPrecio();
    


    const enviarDatos = (e)=> {
        e.preventDefault(); 
        const objOrden = {
            buyer: {
                name,
                lastname,
                telefono,
                direccion,
                Email,
                Email2,
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
        }

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, objOrden)
        .then((res) => {
            setOrderId(res.id);
            deleteAll();
        })
        .catch((error) => {
            console.log (error);
        });
        
 
    };

    
    
    
    const handleName = (e) => {
        
        setName(e.target.value)
        
    };
    


    const handleLastName = (e) => {
        setLastName(e.target.value)
    };
   

    const handleTelefono = (e) => {
        setTelefono(e.target.value)
    };
    const handleDireccion = (e) => {
        setDireccion(e.target.value)
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleEmail2 = (e) =>{
        setEmail2(e.target.value)
    };

    if (orderId) {
        return (
            <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
        );
    }

    

  return (
    <div style={{minHeight: '70vh' , display:'flex', justifyContent:'center', alignItems:'center'}}>
        <form action="" onSubmit={enviarDatos}>
            <input type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name}/> 
            <input type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={lastname}/>
            <input type="text" placeholder="Telefono" name="Telefono" onChange={handleTelefono} value={telefono}/> 
            <input type="text" placeholder="Dirección" name="Dirección" onChange={handleDireccion} value={direccion}/>
            <input type="text" placeholder="E-mail" name="E-mail" onChange={handleEmail} value={Email}/>
            <input type="text" placeholder="Re ingrese su E-mail" name="E-mail" onChange={handleEmail2} value={Email2}/>
            <button disabled={Email !== Email2}>Enviar</button>
        </form>
    </div>
  )
}

export default Form

