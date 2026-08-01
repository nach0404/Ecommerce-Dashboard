import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStats } from '../../utils/api'
import './Home.css'

function Home() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getStats()
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <div className="home">
      <h2 className="home-title">¡Hola, Admin!</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>📦 Productos</h3>
          <p className="stat-number">{stats.totalProducts}</p>
          <div className="stat-actions">
            <button onClick={() => navigate('/products')}>Ver Listado</button>
            <button onClick={() => navigate('/products/new')}>Agregar Producto</button>
          </div>
        </div>

        <div className="stat-card">
          <h3>🏪 Categorías</h3>
          <p className="stat-number">{stats.totalCategories}</p>
          <div className="stat-actions">
            <button onClick={() => navigate('/categories')}>Ver Listado</button>
            <button onClick={() => navigate('/categories/new')}>Agregar Categoría</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home