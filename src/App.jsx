import { useState } from 'react'
import './App.css'
import Presentacion from './Components/Presentacion'
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {

  return (

    <div>
      <Routes>
        <Route exact path='/' element={<Presentacion/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App;
