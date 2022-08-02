import React, {useEffect} from 'react'
import Personajes from './Personajes'
import Footer from './Footer';
import { getUsers } from '../redux/action.js';
import { useDispatch } from 'react-redux';
import '../stylesheets/App.css';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div className='contenedor--padre'>
        <h1 className='title'>Game Of Thrones</h1>
        <Personajes />
      </div>
      <Footer />
    </div>
  )
}

export default App