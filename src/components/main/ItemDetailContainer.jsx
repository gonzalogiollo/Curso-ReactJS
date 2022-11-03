import React, { useEffect, useState }  from 'react'
import { products } from "../../mock/producto";
import ItemDetail from './itemDetail';
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
   
    const {idProd} = useParams();
    useEffect(() =>{
  
      const getProduct = () => {

        
  
        return new Promise ((res) => {
          
          const product = products.find((prod) => prod.id === +idProd);
          
          setTimeout(()=>{

            res(product);
  
          }, 500);
          
        });
        
        
      };
    
    
      getProduct()
       .then((res) =>{
        //console.log ('res', res);
        setProduct(res);
    
       })
        .catch((error)=>{
        console.log('rej',error);
        });
  
    },[idProd]);
  return (
    <div>
        <div  className="detail-container">
       <ItemDetail key={product.id} product={product}/>
      </div>
        
    </div>
  )
}

export default ItemDetailContainer