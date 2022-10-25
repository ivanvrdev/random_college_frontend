// import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Subjects from './pages/Subjects'

import Navbar from './components/Navbar'
import ProtectedRoutes from './components/ProtectedRoutes'

const Router = () => {

  const { token } = useSelector(state => state.user)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signIn' element={<SignIn />} />
      <Route path='*' element={<h1>Página 404</h1>}/>
      <Route element={<ProtectedRoutes condition={token} /> }>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/subjects' element={<Subjects />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Router />
    </BrowserRouter>
  )
}

export default App
