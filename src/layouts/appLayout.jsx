import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='px-10 min-h-screen container'>
        <Header/>
        <Outlet/>
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>
        Made with 💓 by Rishav.
      </div>
    </div>
  )
}

export default AppLayout
