import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import {Login} from './pages/login'
import {Register} from './pages/register'
import {Dashboard} from './pages/dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route path="account" element={<Dashboard />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  )
}

export default App
