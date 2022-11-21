//import { useEffect, useState } from "react"
import React, { useEffect, useState } from "react";
//import { products } from "../../mock/producto";
import ItemList from "../ItemList";
import { useParams} from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from '../../Services/firebaseConfig';
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
  const [loading, setLoading] = useState(true);

  useEffect(() =>{

    

    // const getProducts = () => {

    //   return new Promise ((res) => {

    //     const prodFiltrados = products.filter((prod) => prod.category === categoryName);
    //     const ref= categoryName ? prodFiltrados : products;
    //     setTimeout(()=>{

    //       res(ref);

    //     }, 500);
        
    //   });
      
      
    // };

    
    //const q = query (collectionProd, where('category', '==', 'categoryName'));
    const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd

    getDocs(ref)
    .then((res) => {
        //console.log(res.docs);
        const products = res.docs.map((prod) => {
            //console.log(prod);
            //console.log(prod.data());
            return {
                id: prod.id,
                ...prod.data(),
            };
        });
        setItems(products);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        setLoading(false);
    });
  
  
    // se comenta el getProducts porque lo  vamos a usar con firebase
    // getProducts()
    //  .then((res) =>{
    //   //console.log ('res', res);
    //   setItems(res);
  
    //  })
    //   .catch((error)=>{
    //   console.log('rej',error);
    //   })
    //   .finally(()=> {
    //     setLoading (false); 
    //   })

      return () => setLoading(true); //este return siempre va ser renderizado antes que el codigo del user effect, luego viene la logica y los returns externos, entonces cada vez que cambiemos entre las categorias va mostrar el cargando
      

  },[categoryName]);
  
  
  if (loading) {

    return(
      <div className="container">
      <PacmanLoader size={30}/>

    </div>
    )
    
  }



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