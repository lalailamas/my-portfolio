import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <nav>
        <img src='/images/logo.svg' alt='Logo' className='logo' />
        <button className='menu-toggle' onClick={toggleMenu}>
          <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 16 16'><path fill='#ffffff' d='M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94z' /></svg>
        </button>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href='#sobre-mi' onClick={closeMenu}>Sobre Mí</a></li>
          <li><a href='#tools' onClick={closeMenu}>Herramientas</a></li>
          <li><a href='#proyectos' onClick={closeMenu}>Proyectos</a></li>
          <li><a href='#contacto' onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
