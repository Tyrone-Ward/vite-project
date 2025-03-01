import { Example }  from '../components/NavBar'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const RootLayout = () => {
  return (
  <main>
    <ScrollRestoration />
    <header>
      <Example/>
    </header>
    <article className='p-10'>
      <Outlet/>
    </article>
  </main>
  )
}

export default RootLayout