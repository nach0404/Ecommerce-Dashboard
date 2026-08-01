import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductNew.css'

const API_URL = 'http://localhost:3000/api'

function ProductNew() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    category: '',
    points: 0,
    description: '',
    image: '',
    featured: 0
  })

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

    fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        alert('Producto creado correctamente')
        navigate('/products')
      })
  }

  return (
    <div className="product-new">

      <div className="product-new-header">
        <h2>Productos &gt; Nuevo</h2>
      </div>

      <div className="product-form">
        <h3>Nuevo Producto</h3>

        <label>Nombre *</label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre del producto" />

        <label>Categoría</label>
        <input name="category" value={form.category} onChange={handleChange} placeholder="Categoría" />

        <label>Puntos *</label>
        <input name="points" type="number" value={form.points} onChange={handleChange} />

        <label>Descripción</label>
        <textarea name="description" value={form.description} onChange={handleChange} rows={4} placeholder="Descripción del producto" />

        <label>Imagen (URL)</label>
        <input name="image" value={form.image} onChange={handleChange} placeholder="/assets/imagenes/..." />

        <label className="checkbox-label">
          <input name="featured" type="checkbox" checked={form.featured === 1} onChange={handleChange} />
          Destacado
        </label>

        <div className="form-actions">
          <button className="btn-cancel" onClick={() => navigate('/products')}>Cancelar</button>
          <button className="btn-save" onClick={handleSave}>Guardar</button>
        </div>
      </div>

    </div>
  )
}

export default ProductNew