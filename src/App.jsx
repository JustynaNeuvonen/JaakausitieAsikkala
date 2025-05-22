import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Jaakausi from './pages/jaakausi/Jaakausi'
import Jaakausitie from './pages/jaakausitie/Jaakausitie'
import Tekijat from './pages/tekijat/Tekijat'
import Rootlayout from './components/layout/Rootlayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='jaakausi' element={<Jaakausi />} />
        <Route path='jaakausitie' element={<Jaakausitie />} />
        <Route path='tekijat' element={<Tekijat />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App
