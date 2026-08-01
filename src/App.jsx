import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/organisms/Layout/Layout'
import Home from './pages/Home/Home'
import ProductsList from './pages/Products/ProductsList/ProductsList'
import ProductView from './pages/Products/ProductView/ProductView'
import CategoriesList from './pages/Categories/CategoriesList/CategoriesList'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/profile" element={<h1>Perfil</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App