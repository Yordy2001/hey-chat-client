import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routers/home/home'
import { Login } from './routers/login/login'
import Register from './routers/register/register'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  )
}

export default App
