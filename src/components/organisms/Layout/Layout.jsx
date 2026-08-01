import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-area">
        <header className="main-header">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
        </header>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout