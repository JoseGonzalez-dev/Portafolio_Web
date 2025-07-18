import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from './organism/Navbar'
import { Footer } from './organism/Footer'

export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
