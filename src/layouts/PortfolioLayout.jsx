import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../shared/components/organisms/Navbar'
import { Footer } from '../shared/components/organisms/Footer'

export const PortfolioLayout = () => {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <Navbar />
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
