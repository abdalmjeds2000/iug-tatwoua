import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Manage from './pages/manage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/manage' element={<Manage />} />
    </Routes>
  )
}

export default AppRouter