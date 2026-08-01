import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            🏠 Inicio
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            📦 Productos
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            🏪 Categorías
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar