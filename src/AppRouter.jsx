import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Manage from './pages/Manage'
import SupportAdmin from './pages/SupportAdmin/SupportAdmin'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/manage' element={<Manage />} />
      <Route path='/support-admin' element={<SupportAdmin />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default AppRouter