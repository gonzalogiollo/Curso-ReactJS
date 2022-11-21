import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../Services/firebaseConfig';

const Form = () => {
   const [name, setName] = useState(''); //siempre hay que dar un valor iniciar es el que luego se completara con la "e"
   const [lastname, setLastName] = useState('');
   const [telefono, setTelefono] = useState('');
   const [direccion, setDireccion] = useState('');
   const [Email, setEmail] = useState('');
   const [Email2, setEmail2] = useState('');


   const [orderId, setOrderId] = useState('');


   const { cart, totalPrecio, deleteAll } = useContext(CartContext);
   const totalCarrito = totalPrecio();
    // cuando tenemos muchos inputs creamos un estado que sea un objeto ej: 
    //const [data, setData] = useState({nombre:'', apellido:''})



    const enviarDatos = (e)=> {//dentro del parentesis va el evento, en este caso se coloco la letra "e"
        e.preventDefault(); // El preventDefault lo que hace es prevenir el comportamiento de la etiquerta form que lo que hace es recargar la pagina, es un evento sintetico porque no estamos tocando el DOM
        //console.log(e);
        //console.log(e.target); //el target es para saber quien disparo el evento, en este caso la etiqueta form con sos input
        //console.dir(e.target); // el console.dir trae quien disparo el evento, pero con todas sus propiedades y metodos, 
                                //si buscamos el elements, nos va salir nombre y apellido, para acceder a su valor hacemos (e.target.element.nombre.value)
        //console.dir(e.target.elements.nombre.value); //-> esto nos va traer el nombre ingresado en el form para verlo en el console.log                       
        //de esta forma no se pueden controlar los input, para poder hacerlo hay que usar Eventos, osea useState.

        //si queremos enviar los datos name y lastName a mi base de datos, al tenerlos guardados en el estado, lo enviamos como un objeto, y que lo almacene de la siguiente manera: 
        // const obj = {
        //     comprador:{
        //         nombre: name,
        //         apellido: lastname,
        //     },
        //     date:,
        //     cart:
        // };

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
            //cart -> [id, title,stock,price,img,etc]
            //cartReducido -> [id,title,price]
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
            console.log('Hubo un error', error);
        });
        // .finally(()=>{
        // cambio el estado a false
        // })
 
    };

    
    
    //armado de funcion para el evento onChange que luego se ejcuta en el input el valor handleName y handleLastName 
    const handleName = (e) => {
        //console.dir(e.target.value); con este console entramos y obtenemos el value, para ver el value hay que guardarlo en el estado setName, y lo podemos ver ejecutando name en el console.log, pero se debe ejecutar en el value del input en si
        setName(e.target.value)
        
    };
    //console.log(name); 


    const handleLastName = (e) => {
        setLastName(e.target.value)
    };
    //console.log(lastname);

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

    //para asignar el valor inicial a mi estado "data", lo hacemos con una sola funcion en lugar de usar las dos de arriba, entonces hacemos: 
    // const handleChange = (e)=>{
    //     // e.target.value tengo el valor
    //     // e.targe.name difencia los campos, usa name, pero trae nombre y apellido

        
    //     const {name, value} = e.target;
    //     setData ({...data, [name]: value});
    // };

    //console.log(data)


    //funcion para limpieza de memoria de la api, ya que cada evente que se genera se guarda en memoria, asi sea hasta el mov del mouse, ej para removerlos:
    // primero creamos la funcion que luego removeremos usando el useEffect. 
    // const handleMove= (e)=>{
    //     console.log(e.clientex)
    // }


     //ahora cada evento que se genere, se borra lo anterior y se genera el nuevo, osea primero hace la limpieza y luego genera el nuevo evento, que puede ser un click o un movimiento de mouse
    // useEffect(()=>{
    //     window.addEventListener('mousemove', handleMove) //segundo ejecuta el codigo
    //     return ()=>{
    //         window.removeEventListener('mouseMove', handleMove) //primero limpia
    //     }
    // })

    if (orderId) {
        return (
            <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
        );
    }

    

  return (
    <div style={{minHeight: '70vh' , display:'flex', justifyContent:'center', alignItems:'center'}}>
        <form action="" onSubmit={enviarDatos}>
            {/* <input type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name}/>
            <input type="text" placeholder="Apellido" name="Apellido" onChange={handleLastName} value={lastname}/> */}
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

// evento onChange: se coloca en el input, y sirve para disparar una funcion, por cada cambio que tengamos en el input va a disparar una funcion. Simpre por cada input va uan funcion onChange