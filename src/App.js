import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import {Login} from './pages/login'
import Products from './pages/products'
import {Register} from './pages/register'
import {Dashboard} from './pages/dashboard'
import ShoppingCart from './pages/shopping-cart'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={'loading...'}>
            <Home />
          </Suspense>
        }
      />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route path="account" element={<Dashboard />} />
      <Route element={<ShoppingCart />} path="shopping-cart" />
      <Route
        element={
          <Suspense fallback={'loading...'}>
            <Products />
          </Suspense>
        }
        path="products"
      />
      {/* <Route path="expenses" element={<Expenses />} /> */}
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  )
}

export default App
