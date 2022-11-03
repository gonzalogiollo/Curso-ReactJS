import React from 'react'
import CartWidget from '../CartWidgets/CartWidget'
import Button from '../Button'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
    
    <nav> 
        <ul>
            <li>SALE</li>
            <NavLink className='links' to='/category/remeras'>Remeras</NavLink>
            <NavLink className='links' to='/category/bermudas'>Bermudas</NavLink>
            <NavLink className='links' to='/category/billeteras'>Billeteras</NavLink>
            <NavLink className='links' to='/category/caps'>Caps</NavLink>
            <NavLink className='links' to='/category/surfBoard'>surfBoard</NavLink>
            
        </ul>

        

        <div style={{display: 'flex', alignItems: 'center'}}>
          <Link to='/cart'><CartWidget/></Link>

          
          <Button text="login"/>
          
        </div>

        


      </nav>

   </div> 
  )
}

export default Navbar