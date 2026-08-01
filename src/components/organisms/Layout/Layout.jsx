import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

const pageTitles = {
  '/': 'Inicio',
  '/products': 'Productos',
  '/categories': 'Categorías',
}

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const title = pageTitles[location.pathname] || 'Dashboard'

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-area">
        <header className="main-header">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          <h2 className="header-title">{title}</h2>
        </header>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout