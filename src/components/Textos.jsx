import React from 'react'
import {useState} from 'react'

const Textos = () => {
  
  const [texto, setTexto] = useState ('gonzalo');

  const cambiarTexto = () => {
    if (texto === 'gonzalo'){
        setTexto('hola laura');
    }else{
        setTexto('gonzalo')
    }
  }
   
  
  
  
  
    return (
    <div>
        <h1>{texto}</h1>
        <button onClick={cambiarTexto}>cambiar texto</button>
    </div>
  )
}

export default Textos