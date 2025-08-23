
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
