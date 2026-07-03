import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Restaurants from './pages/Restaurants'
import Orders from './pages/Orders'
import Ads from './pages/Ads'
import Drivers from './pages/Drivers'
import Login from './pages/Login'
import PromoCodes from './pages/PromoCodes'
import './App.css'
import Sidebar from './components/SideBar'
import Header from './components/Header'

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'
  return (
  <>
    
    {!isLoginPage && <Header />}
    {!isLoginPage && <Sidebar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/ads' element={<Ads />} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/promo-codes' element={<PromoCodes />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    
  </>
  )
}

export default App
