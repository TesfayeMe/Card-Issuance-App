import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Comtrollers/HomeController/Home'
import SignInController from './Components/Comtrollers/SignInController/SigninController'
import SignUpController from './Components/Comtrollers/SignUpController/SignUpController'
import Dashboard from './Components/Comtrollers/Dashboard/Dashboard'
import MachineController from './Components/Comtrollers/MachineController/MachineController';
import SpareParts from './Components/Comtrollers/SpareParts/SpareParts'
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
          <Route path='/machines' element={<MachineController/>}/>
          <Route path='/spares' element={<SpareParts/>}/>
        </Routes>
          </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
