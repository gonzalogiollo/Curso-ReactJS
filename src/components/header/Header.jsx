import React from 'react'
import Main from '../main/Main'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div>
      <a href='/'>Surf shop</a>

      <Navbar/>
      <Main  saludo=" Bienvenidos a nuestro shop online 🤙"/>
    </div>
    )
}

export default Header