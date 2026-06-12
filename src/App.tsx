import './App.css'
import { NavBar } from './components/NavBar'
import { Outlet, useLocation } from 'react-router'

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="max-w-full md:max-w-3xl mx-auto my-8 px-8 md:px-4">
        <NavBar pathName={pathname} />
        <div className='mt-12'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
