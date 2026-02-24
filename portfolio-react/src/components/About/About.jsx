import './About.css'
import drawImage from '../../assets/draw.png'

const About = ({ t }) => {
  return (
    <section className="about" id="about">
      <div className="about-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate">{t.about.title}</h2>
          <p className="section-subtitle animate delay-1">{t.about.subtitle}</p>
        </div>
        
        <div className="about-grid">
          {/* Coluna da Foto */}
          <div className="about-photo animate">
            <div className="photo-container">
              <img src={drawImage} alt="Paulo Sérgio" className="profile-img" />
              <div className="photo-frame"></div>
              <div className="tech-dots">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
                <span className="dot dot-4"></span>
              </div>
            </div>
          </div>
          
          {/* Coluna do Texto */}
          <div className="about-content">
            <div className="about-text animate delay-1">
              <div className="text-block">
                <p>{t.about.intro}</p>
              </div>
              
              <div className="text-block">
                <p>{t.about.description}</p>
              </div>
              
              <div className="text-block">
                <p>{t.about.focus}</p>
              </div>
            </div>
            
            {/* Timeline Educacional */}
            <div className="education-timeline animate delay-2">
              <div className="timeline-item">
                <div className="timeline-badge"><i className="fas fa-graduation-cap"></i></div>
                <div className="timeline-content">
                  <h3>{t.about.degree}</h3>
                  <p>{t.about.university}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge"><i className="fas fa-graduation-cap"></i></div>
                <div className="timeline-content">
                  <h3>{t.about.technicalDegree}</h3>
                  <p>{t.about.technicalSchool}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
