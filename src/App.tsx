import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PeriodicTable from './pages/PeriodicTable'
import ProductsPage from './pages/ProductsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/'element={<PeriodicTable />} />
        <Route  path='/productspage' element={<ProductsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
