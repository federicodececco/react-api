import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
export default function DefaultLayout() {
  return (
    <>
      <div className='bg-blue-600 text-white'>
        <NavBar></NavBar>
      </div>
      <div className='bg-gray-100'>
        <Outlet></Outlet>
      </div>
    </>
  )
}
