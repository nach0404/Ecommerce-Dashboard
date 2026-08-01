import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById, updateProduct, deleteProduct } from '../../../utils/api'
import './ProductView.css'

function ProductView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({})

  useEffect(() => {
    getProductById(id)
      .then(data => {
        setProduct(data)
        setForm(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    }))
  }

  const handleSave = () => {
    if (!form.name) return alert('El nombre es obligatorio')
    if (!form.points || isNaN(form.points)) return alert('Los puntos deben ser un número')

    updateProduct(id, form)
      .then(() => {
        alert('Producto actualizado correctamente')
        navigate('/products')
      })
  }

  const handleDelete = () => {
    if (!confirm('¿Estás seguro que querés eliminar este producto?')) return

    deleteProduct(id)
      .then(() => {
        alert('Producto eliminado')
        navigate('/products')
      })
  }

  const handleCancel = () => {
    setForm(product)
  }

  if (loading) return <p>Cargando...</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <div className="product-view">

      <div className="product-view-header">
        <h2>Productos &gt; #{product.id}</h2>
        <button className="btn-delete" onClick={handleDelete}>🗑️ Eliminar</button>
      </div>

      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-info">
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Nombre:</strong> {product.name}</p>
          <p><strong>Categoría:</strong> {product.category}</p>
          <p><strong>Puntos:</strong> {product.points}</p>
          <p><strong>Destacado:</strong> {product.featured ? '⭐ Sí' : 'No'}</p>
        </div>
      </div>

      <div className="product-form">
        <h3>Editar Producto</h3>

        <label>Nombre *</label>
        <input name="name" value={form.name || ''} onChange={handleChange} />

        <label>Categoría</label>
        <input name="category" value={form.category || ''} onChange={handleChange} />

        <label>Puntos *</label>
        <input name="points" type="number" value={form.points || 0} onChange={handleChange} />

        <label>Descripción</label>
        <textarea name="description" value={form.description || ''} onChange={handleChange} rows={4} />

        <label>Imagen (URL)</label>
        <input name="image" value={form.image || ''} onChange={handleChange} />

        <label className="checkbox-label">
          <input name="featured" type="checkbox" checked={form.featured === 1} onChange={handleChange} />
          Destacado
        </label>

        <div className="form-actions">
          <button className="btn-cancel" onClick={handleCancel}>Cancelar</button>
          <button className="btn-save" onClick={handleSave}>Guardar</button>
        </div>
      </div>

    </div>
  )
}

export default ProductView