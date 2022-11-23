import React from 'react'
import CartWidget from '../CartWidgets/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs} from "firebase/firestore";
import {catCollection} from "../../Services/firebaseConfig"

const Navbar = () => {
   
  const [categories, setCategories] = useState([])

  useEffect(()=>{

    

    getDocs(catCollection)
    .then((res) => {
      const secciones = res.docs.map((prod) => {
            
        return {
          id: prod.id,
          ...prod.data(),
        };
        });
      setCategories(secciones);
    })
    .catch((error) => {
        console.log(error);
    })

  },[]);
 

  return ( 
    <div>
      
    
    <nav> 
        <ul>
            <li className='sale'>SALE</li>
             {categories.map((cat)=>(
              <NavLink key={cat.id} className='links' to={`/category/${cat.path}`}>{cat.title}</NavLink>
             ))}
            
        </ul>

        <div className='carrito'>
          <Link to='/cart'><CartWidget/></Link>
        </div>

      </nav>

   </div> 
  )
}

export default Navbar