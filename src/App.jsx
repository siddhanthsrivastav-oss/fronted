import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/home'
import Login from './Pages/login';
import Header from './Components/Header';
const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </Router>
    
    </>
  )
}

export default App