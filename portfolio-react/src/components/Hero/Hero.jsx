import { useEffect, useState } from 'react'
import './Hero.css'
import mainImage from '../../assets/main.jpg'

const Hero = ({ t }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [delta, setDelta] = useState(200)

  const toRotate = t.hero.roles
  const period = 2000

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text, delta, isDeleting, loopNum])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1))
    } else {
      setText(fullText.substring(0, text.length + 1))
    }

    if (isDeleting) {
      setDelta(100)
    } else {
      setDelta(150)
    }

    if (!isDeleting && text === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <div className="hero-text animate">
          <h6 className="hero-subtitle">{t.hero.greeting}</h6>
          <h1 className="hero-title">{t.hero.name}</h1>
          <h2 className="hero-role">
            <span className="txt-rotate">
              <span className="wrap">{text}</span>
            </span>
          </h2>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary btn-hero" onClick={(e) => scrollToSection(e, 'projects')}>
              <i className="fas fa-code"></i> {t.hero.cta}
            </a>
            <a href="#contact" className="btn btn-outline btn-hero" onClick={(e) => scrollToSection(e, 'contact')}>
              <i className="fas fa-paper-plane"></i> {t.hero.contact}
            </a>
          </div>
        </div>
        <div className="hero-image animate delay-1">
          <div className="image-wrapper">
            <img src={mainImage} alt="Paulo Sérgio" />
            <div className="tech-icons">
              <i className="fab fa-js-square js-icon"></i>
              <i className="fab fa-python python-icon"></i>
              <i className="fab fa-react react-icon"></i>
              <i className="fas fa-database db-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-down" onClick={(e) => scrollToSection(e, 'about')}>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  )
}

export default Hero
