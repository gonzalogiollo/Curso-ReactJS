import React from 'react'
import Main from '../main/Main'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className='titulo1'>
      <div><a className='titulo2' href='/'>Surf shop</a></div>
      <Navbar/>
      <Main  saludo=" Bienvenidos a nuestro shop online 🤙"/>
    </div>
    )
}

export default Header