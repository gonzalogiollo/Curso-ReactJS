import React from 'react'



const Main = (greeting) => {
  return (
    <main className='main'>
      <div className="saludo">
      <p>{greeting.saludo}</p>
      </div>
      
    </main>
    
  )
}

export default Main