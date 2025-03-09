import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  // SignIn
} from '@clerk/clerk-react'

// Pages
import Messages from './pages/Messages'
import Clients from './pages/Clients'
import NotFound from './pages/NotFound'
import SignInPage from './pages/authentication/SignIn'
import Register from './pages/authentication/Register'
import Profile from './pages/Profile'

// Layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Messages />}/>
      <Route path="clients" element={<Clients />}/>
      <Route path='profile' element={< Profile />}/>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
const authRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< SignInPage />}>
      <Route path='register' element={< Register />}/>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <>
    <SignedOut>
      {/* <SignIn />   */}
      <RouterProvider router={authRouter} />
    </SignedOut>
    <SignedIn>
      <RouterProvider router={router} />
    </SignedIn>
    </>
  )
}

export default App
