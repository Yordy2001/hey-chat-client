import { Routes, Route } from 'react-router-dom'
import Home from './routers/home/home'
import { Login } from './routers/login/login'
import Register from './routers/register/register'
import PrivateRouter from './utils/protecteRoute'


function App() {

  return (
    <Routes>
      <PrivateRouter>
          <Route path='/' element={<Home />}></Route>
      </PrivateRouter>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      
      <Route path='*' element={<Login />}></Route>
    </Routes>
  )
}

export default App
