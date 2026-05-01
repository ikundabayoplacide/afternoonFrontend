import { useState } from 'react'
import {BrowserRouter,Router,Route,Navigate, Routes} from  'react-router-dom'
import LandingPage from './pages/landingPage'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Users from './pages/dashboard/users'
import Products from './pages/dashboard/products'
import Shops from './pages/dashboard/shops'
import Notifications from './pages/dashboard/Notifications'
import Settings from './pages/dashboard/Settings'
import Orders from './pages/dashboard/Orders'
function App() {
  return (
 <BrowserRouter>
<Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/dashboard' element={<Dashboard/>}>
<Route index element={<Navigate to='users' replace />}/>
<Route path='Users' element={<Users/>}/>
<Route path='Orders' element={<Orders/>}/>
<Route path='Products' element={<Products/>}/>
<Route path='Shops' element={<Shops/>}/>
<Route path='Notifications' element={<Notifications/>}/>
<Route path='Settings' element={<Settings/>}/>
</Route>

</Routes>
 </BrowserRouter>
  )
}

export default App
