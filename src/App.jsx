import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './pages/Home'
import Subjects from './pages/Subjects'
import Subject from './pages/Subject'
import Management from './pages/Management'
import Profile from './pages/Profile'
import Login from './pages/Login'
import CreateUser from './pages/Management/components/CreateUser'

import ProtectedRoutes from './components/ProtectedRoutes'
import Navbar from './components/Navbar'
import { OffCanvas } from './components/OffCanvas'

import { authSession, setPreviusLocation } from './redux/actions/session'

import './styles/app.css'

const Router = ({auth}) => {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<h1>Página 404</h1>}/>
      <Route element={<ProtectedRoutes condition={auth} /> }>
        <Route path='/management'>
          <Route index element={<Management />} />
          <Route path='user/add' element={<CreateUser />} />
        </Route>
        <Route path='/subjects'>
          <Route index element={<Subjects />} />
          <Route path=':subjectId' element={<Subject />} /> 
        </Route>
        <Route path='/profile'>
          <Route path=':username' element={<Profile />} />
          <Route path='me' element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  )
}

function App({auth, authSession, setPreviusLocation}) {

  const location = useLocation()

  const [currentLocation, setCurrentLocation] = useState("/")

  useEffect(()=>{
    authSession()
  }, [])

  useEffect(()=>{
    setPreviusLocation(currentLocation)
    setCurrentLocation(location.pathname)
  }, [location])

  return (
    <>
      <Navbar />
      <OffCanvas />
      <div className="container app-container">
        <Router auth={auth}/>
      </div>
    </>
  )
}

const mapStateToProps = state => state.session

export default connect(mapStateToProps, {authSession, setPreviusLocation})(App)
