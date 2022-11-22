import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams} from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from '../../Services/firebaseConfig';
const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);
 
  const {categoryName} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() =>{

    const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd

    getDocs(ref)
    .then((res) => {
        
        const products = res.docs.map((prod) => {
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
 
    return () => setLoading(true); 
      

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
    </div>
  )
}

export default ItemListContainer