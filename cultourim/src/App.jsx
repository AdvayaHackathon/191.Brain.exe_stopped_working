import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing'
import Home from './pages/home'
import './App.css'
import Ava from './pages/ava'

function App() {

  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/ava' element={<Ava/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
