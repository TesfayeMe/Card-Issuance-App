import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Comtrollers/HomeController/Home'
import SignInController from './Components/Comtrollers/SignInController/SigninController'
import SignUpController from './Components/Comtrollers/SignUpController/SignUpController'
import Dashboard from './Components/Comtrollers/Dashboard/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
          <div className="app-container">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInController />} />
          <Route path="/signup" element={<SignUpController />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
          </div>
      <Footer />
    </>
  )
}

export default App
