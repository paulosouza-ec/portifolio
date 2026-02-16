import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <i className="fas fa-code"></i>
            <span>Paulo Sérgio [psgs]</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Sobre</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Habilidades</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projetos</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experiência</a></li>
            <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Formação</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contato</a></li>
            <li className="theme-toggle-container">
              <button 
                id="themeToggle" 
                className="theme-toggle" 
                aria-label="Alternar tema"
                onClick={toggleTheme}
              >
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
              </button>
            </li>
          </ul>
          <div className="hamburger">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
