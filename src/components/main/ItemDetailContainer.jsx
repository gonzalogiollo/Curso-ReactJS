import React, { useEffect, useState }  from 'react'
//import { products } from "../../mock/producto";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {collectionProd} from '../../Services/firebaseConfig'
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    //const [loading, setLoading] = useState(false); //rendering condicional, lo podemos arrancar en false, luego en la llamada a la api, lo pasamos a true y en el finally lo llevamos a false
    // lo que hace es mostrar un cargando mientras renderiza la vista. 
    const [loading, setLoading] = useState(true);
    const {idProd} = useParams();
    useEffect(() =>{
  
      // const getProduct = () => {

      //   return new Promise ((res) => {
          
      //     const product = products.find((prod) => prod.id === +idProd);
          
      //     setTimeout(()=>{

      //       res(product);
  
      //     }, 500);
          
      //   });
        
        
      // };

      const ref = doc(collectionProd, idProd);

      getDoc(ref)
          .then((res) => {
              //console.log(res);
              setProduct({
                  id: res.id,
                  ...res.data(),
              });
          })
          .catch((error) => {
              console.log(error);
          })
          .finally(() => {
              setLoading(false);
      });
    
       // tambien se comenta ya que  vamos a estar consumiendo firebase
      // //setLoading(true); // aca declaramos el true, osea si esta cargando muestra 'cargando...', sino pasa al finally
      // getProduct()
      //  .then((res) =>{
      //   //console.log ('res', res);
      //   setProduct(res);
    
      //  })
      //   .catch((error)=>{
      //   console.log('rej',error);
      //   })
      //   .finally(()=> {
      //     setLoading (false); // aca ya no estaria cargando y muestra el itemdetail del return. todo esto tam,bien podemos hacerlo con un if, que seria un 
      //   })
  
    },[idProd]);


    // if con return temprano o early return, en lugar de usar el (false) en el estado inicial, luego en el setloading el (true) y en el finally el false para luego pasarlo por jsx en el return del final, lo pasamos por un if
    // poniendo en el estado inicial (true) y en el finally el (false), entonces cuando llegue al if(loading), si no esta cargando va mostrar el itemDetail
    if (loading){
      return (
        <div className="detail-container">
          <PacmanLoader size={30}/>

        </div>
      )

    }

    //este es el return con jsx usando el loading?
  // return (
  //   <div>
  //     <div  className="detail-container">
  //       {
  //         loading ? <h1>Cargando</h1>: <ItemDetail key={product.id} product={product}/>
  //       }
        
  //     </div>
        
  //   </div>
  // )

  return ( //este es el return normal que es donde va caer despues del return temprano y cuando resuelva que el loading es false
    <div>
      <div  className="detail-container">
        {
          <ItemDetail key={product.id} product={product}/>
        }
        
      </div>
        
    </div>
  )

  
}

export default ItemDetailContainer