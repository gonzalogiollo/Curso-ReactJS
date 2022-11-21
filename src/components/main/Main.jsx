import React from 'react'



const Main = (greeting) => {
  return (
    <main className='main'>
      <div>
      <p className="saludo">{greeting.saludo}</p>
      </div>
      
    </main>
    
  )
}

export default Main