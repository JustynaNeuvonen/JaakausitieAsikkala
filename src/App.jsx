import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
import Jaakausi from './pages/Jaakausi'
import Jaakausitie from './pages/Jaakausitie'
import Tekijat from './pages/Tekijat'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jaakausi' element={<Jaakausi />} />
        <Route path='/jaakausitie' element={<Jaakausitie />} />
        <Route path='/tekijat' element={<Tekijat />} />
        
      </Routes>
    </div>
  )
}

export default App
