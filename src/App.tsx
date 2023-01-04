import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './routers/login/login'

function App() {

  return (
      <Routes>
        <Route path='/login' element={<Login />}>
        </Route>
      </Routes>
  )
}

export default App
