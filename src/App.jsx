import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'signIn',
    element: <SignIn />
  },
  {
    path: 'signUp',
    element: <SignUp />
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
