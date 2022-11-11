import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Subjects from './pages/Subjects'
import Admin from './pages/Admin'
import Degrees from './pages/Degrees'
import Profile from './pages/Profile'
import Login from './pages/Login'

import ProtectedRoutes from './components/ProtectedRoutes'
import Navbar from './components/Navbar'

import store from './redux/store'
import { OffCanvas } from './components/OffCanvas'

const Router = () => {

  const [token, setToken] = useState(null)

  store.subscribe(()=>{
    setToken(store.getState().session.token)
  })

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<h1>Página 404</h1>}/>
      <Route element={<ProtectedRoutes condition={token} /> }>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/subjects' element={<Subjects />} />
        <Route path='/degrees' element={<Degrees />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

function App() {

  useEffect(()=>{

    const token = localStorage.getItem('token')

    if(!token) return

    fetch('http://localhost:4000/auth/token', {
      method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({token})
    })
    .then(response => response.json())
    .then(data => store.dispatch({type: 'LOG_IN', payload: {token, user: data.user}}))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <OffCanvas />
      <Router />
    </BrowserRouter>
  )
}

export default App
