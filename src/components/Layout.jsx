import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from './organism/Navbar'
import { Footer } from './organism/Footer'

export const Layout = () => {
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
