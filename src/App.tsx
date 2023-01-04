import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './routers/login/login'
import Register from './routers/register/register'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  )
}

export default App
