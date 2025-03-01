// import './App.css'

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// Pages
import Messages from './pages/Messages'
import Clients from './pages/Clients'
import NotFound from './pages/NotFound'
import SignIn from './pages/authentication/SignIn'
import Register from './pages/authentication/Register'
import Profile from './pages/Profile'

// Layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Messages />}/>
      <Route path="clients" element={<Clients />}/>
      <Route path='login' element={< SignIn />}/>
      <Route path='register' element={< Register />}/>
      <Route path='profile' element={< Profile />}/>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
