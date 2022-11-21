import React from 'react'
import CartWidget from '../CartWidgets/CartWidget'
//import Button from '../Button'
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
 console.log(categories)

  return ( //se comento los navlink, porque ahora cada categoria va ser consumida desde la api y lo hacemos a travez de las categorias creadas
    <div>
      
    
    <nav> 
        <ul>
            <li className='sale'>SALE</li>
             {categories.map((cat)=>(
              <NavLink key={cat.id} className='links' to={`/category/${cat.path}`}>{cat.title}</NavLink>
             ))}



            {/* <NavLink className='links' to='/category/remeras'>Remeras</NavLink>
            <NavLink className='links' to='/category/bermudas'>Bermudas</NavLink>
            <NavLink className='links' to='/category/billeteras'>Billeteras</NavLink>
            <NavLink className='links' to='/category/caps'>Caps</NavLink>
            <NavLink className='links' to='/category/surfBoard'>surfBoard</NavLink> */}
            
        </ul>

        

        <div className='carrito'>
          <Link to='/cart'><CartWidget/></Link>

          
          {/* <Button text="login"/> */}
          
        </div>

        


      </nav>

   </div> 
  )
}

export default Navbar