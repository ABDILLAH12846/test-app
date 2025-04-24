import './App.css'
import { Route, Routes } from 'react-router'
import Login from './page/login/login'
import Task from './page/task/task'
import AddTask from './page/add-task/add-task'
import EditTask from './page/edit-task/edit-task'
import Product from './page/product/product'
import DetailProduct from './page/detail-product/detail-product'
import Cart from './page/cart/cart'
import ProtectedRoute from './page/protected/protected'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/task' element={<Task />} />
          <Route path='/add-task' element={<AddTask />} />
          <Route path='/edit-task/:id' element={<EditTask />} />
          <Route path='/product' element={<Product />} />
          <Route path='/detail-product' element={<DetailProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
