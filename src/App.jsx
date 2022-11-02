import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Subjects from './pages/Subjects'
import Dashboard from './pages/dashboard'
import Degrees from './pages/Degrees'

import Sidebar from './components/Sidebar'
import ProtectedRoutes from './components/ProtectedRoutes'

import store from './redux/store'

const Router = () => {

  const [token, setToken] = useState(null)

  store.subscribe(()=>{
    setToken(store.getState().user.token)
  })

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signIn' element={<SignIn />} />
      <Route path='*' element={<h1>Página 404</h1>}/>
      <Route element={<ProtectedRoutes condition={token} /> }>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/subjects' element={<Subjects />} />
        <Route path='/degrees' element={<Degrees />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
