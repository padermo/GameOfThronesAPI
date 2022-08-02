import React from 'react'
import { useSelector } from 'react-redux'
import '../stylesheets/Personajes.css';

function Personajes() {
  const user = useSelector(state => state.personajes)
  return (
    <div className='contenedor--principal'>
      {
        user.map(e => 
          <div key={e.id} className='contenedor-personaje'>
            <img className='imagen--personaje' src={e.imageUrl} alt={e.image} />
            <h1>{e.fullName}</h1>
            <h3>"{e.title}"</h3>
            <h4>Of The <span>{e.family}</span></h4>
          </div>
        )
      }
    </div>
  )
}

export default Personajes