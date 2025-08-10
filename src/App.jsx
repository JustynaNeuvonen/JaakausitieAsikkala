import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Jaakausi from './pages/jaakausi/Jaakausi'
import Jaakausitie from './pages/jaakausitie/Jaakausitie'
import Tekijat from './pages/tekijat/Tekijat'
import Rootlayout from './components/layout/Rootlayout'
import Vaaksynjoki from './pages/vaaksynjoki/Vaaksynjoki'
import Vesivehmaankangas from './pages/vesivehmaankangas/Vesivehmaankangas'
import Tallukanmaki from './pages/tallukanmaki/Tallukanmaki'
import Aurinkovuori from './pages/aurinkovuori/Aurinkovuori'
import Syrjansupat from './pages/syrjansupat/Syrjansupat'
import Pulkkilanharju from './pages/pulkkilanharju/Pulkkilanharju'
import Kalkkinen from './pages/kalkkinen/Kalkkinen'
import './i18next'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='jaakausi' element={<Jaakausi />} />
        <Route path='jaakausitie' element={<Jaakausitie />} />
        <Route path='tekijat' element={<Tekijat />} />
        <Route path='vaaksynjoki' element={<Vaaksynjoki />} />
        <Route path='vesivehmaankangas' element={<Vesivehmaankangas />} />
        <Route path='tallukanmaki' element={<Tallukanmaki />} />
        <Route path='aurinkovuori' element={<Aurinkovuori />} />
        <Route path='syrjansupat' element={<Syrjansupat />} />
        <Route path='pulkkilanharju' element={<Pulkkilanharju />} />
        <Route path='kalkkinen' element={<Kalkkinen />} />
      </Route>
    ),
   
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App
