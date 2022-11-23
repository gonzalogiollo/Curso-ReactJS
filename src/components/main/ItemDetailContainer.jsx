import React, { useEffect, useState }  from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {collectionProd} from '../../Services/firebaseConfig'
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {idProd} = useParams();
    useEffect(() =>{

      const ref = doc(collectionProd, idProd);

      getDoc(ref)
          .then((res) => {
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
  
    },[idProd]);


   
    if (loading){
      return (
        <div className="detail-container">
          <PacmanLoader size={30}/>

        </div>
      )

    }

    
  

  return ( 
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