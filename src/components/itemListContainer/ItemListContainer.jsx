//import { useEffect, useState } from "react"
import React, { useEffect, useState } from "react";
import { products } from "../../mock/producto";
import ItemList from "../ItemList";
import { useParams} from 'react-router-dom'
const ItemListContainer = () => {
  // const [count, setCount] = useState(0);
  // const [texto, SetTexto] = useState ('carla');

  // useEffect(() => {
  //   // el codigo se ejecuta luego del render y siempre que se renderize el componente
  //   console.log('me renderizo siempre')
  // });
  
  // useEffect(() => {
  //   // codigo que se ejecuta luego del render, una sola vez
  //   // llamadas asincronicas
  //   console.log('me renderizo 1 sola vez')
  // }, []);


  // useEffect(() => {
  //   // codigo que se ejecuta luego del render, una sola vez y cada vez que cambie la dependencia
  //   console.log('me renderizo una vez y cada vez que cambie el texto')
  // }, [texto]);

  // const sumar = () => {
  //   setCount (count + 1 );
  // };

  // const cambiarTexto = () => {
  //   SetTexto('Eric');
  // }
   const [items, setItems] = useState([]);
   
  //  const valor= useParams();
  //  console.log(valor.categoryName)
    
  const {categoryName} = useParams();

  useEffect(() =>{

    

    const getProducts = () => {

      return new Promise ((res) => {

        const prodFiltrados = products.filter((prod) => prod.category === categoryName);
        const ref= categoryName ? prodFiltrados : products;
        setTimeout(()=>{

          res(ref);

        }, 500);
        
      });
      
      
    };
  
  
    getProducts()
     .then((res) =>{
      //console.log ('res', res);
      setItems(res);
  
     })
      .catch((error)=>{
      console.log('rej',error);
      });

  },[categoryName]);
  




  return (
    <div>
      

      <div  className="container">
       <ItemList items={items}/>
      </div>
        

        {/* <div>
          <p onClick={sumar}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sit, 
            odio non dolore illo nam! Necessitatibus ipsum, odit corrupti sed quaerat ratione iure, 
            possimus recusandae delectus deserunt, dignissimos dolorem!
          </p>

          <h1>{texto}</h1>
          <button onClick={cambiarTexto}>cambiar texto</button>

        </div> */}
    </div>
  )
}

export default ItemListContainer