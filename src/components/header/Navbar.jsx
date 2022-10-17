import React from 'react'
import CartWidget from '../CartWidgets/CartWidget'
import Button from '../Button'


const Navbar = () => {
  return (
    <div>
      
    
    <nav> 
        <ul>
            <li>SALE</li>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niño</li>
            <li>Calzado</li>
            <li>Neoprene</li>
            <li>Eventos</li>
        </ul>

        

        <div style={{display: 'flex', alignItems: 'flex-end'}}>

          <CartWidget/>
          <Button text="login"/>
          
        </div>

        


      </nav>

   </div> 
  )
}

export default Navbar