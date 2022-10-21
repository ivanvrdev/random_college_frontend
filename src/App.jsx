import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/signIn' element={<SignIn />} />
    <Route path='/signUp' element={<SignUp />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Router />
    </BrowserRouter>
  )
}

export default App
