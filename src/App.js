import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import {Login} from './pages/login'
import {Register} from './pages/register'
import ShoppingCart from './pages/shopping-cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<ShoppingCart />} path="shopping-cart" />
      {/* <Route path="expenses" element={<Expenses />} /> */}
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  )
}

export default App
