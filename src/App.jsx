import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
        <div className="main-container">
          <Outlet />
        </div>
      <Footer />
    </>

  )
}

export default App