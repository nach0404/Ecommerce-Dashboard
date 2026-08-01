import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../../../utils/api'
import './ProductsList.css'

function ProductsList() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Cargando...</p>

  return (
    <div className="products-list">

      <div className="products-header">
        <h2>Productos</h2>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
          <button onClick={() => navigate('/products/new')}>+ Agregar Producto</button>
        </div>
      </div>

      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Puntos</th>
            <th>Destacado</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-results">No hay productos que coincidan con la búsqueda.</td>
            </tr>
          ) : (
            filtered.map(product => (
              <tr key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.points}</td>
                <td>{product.featured ? '⭐' : '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  )
}

export default ProductsList