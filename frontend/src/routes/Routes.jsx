import {
  Routes as RouterRoutesDOM,
  Route,
  BrowserRouter,
} from 'react-router-dom'
//pages ,components
import { Home, Login, Register, Products, Contact } from '../pages'
import { Layout, NavbarHeader } from '../components'

const Routes = () => {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <Layout>
        <RouterRoutesDOM>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </RouterRoutesDOM>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
