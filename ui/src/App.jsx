import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import PaymentSuccess from './PaymentSuccess'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
