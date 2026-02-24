import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import { translations } from './translations'

function App() {

  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('pt-BR')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(savedTheme)
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }

    // Load saved language
    const savedLanguage = localStorage.getItem('language') || 'pt-BR'
    setLanguage(savedLanguage)

    // Back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'pt-BR' ? 'en' : 'pt-BR'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = translations[language]

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Contact t={t} />
      
      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'active' : ''}`}
        onClick={scrollToTop}
        aria-label={t.backToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  )
}

export default App

