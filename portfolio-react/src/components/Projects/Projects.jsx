import './Projects.css'
import doggyImg from '../../assets/doggy.png'
import canIdsImg from '../../assets/can-ids.png'
import techImg from '../../assets/tech.png'
import sirenImg from '../../assets/siren-sound-reco.png'
import rubensImg from '../../assets/rubens-game-ip.png'
import rdtchatImg from '../../assets/rdtchat.png'
import rodaImg from '../../assets/roda.jpg'
import naiveBaiesImg from '../../assets/naive_baies.png'
import buchoImg from '../../assets/bucho1.png'
import covid19Img from '../../assets/covid19.png'

const Projects = ({ t }) => {
  const projectImages = {
    doggy: doggyImg,
    canIds: canIdsImg,
    tech: techImg,
    siren: sirenImg,
    rubens: rubensImg,
    rdtchat: rdtchatImg,
    roda: rodaImg,
    naiveBaies: naiveBaiesImg,
    bucho: buchoImg,
    covid19: covid19Img
  }

  const projects = (t.projects.items || []).map((project) => ({
    ...project,
    image: projectImages[project.id] || doggyImg
  }))

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
          <br />
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <div key={idx} className="project-tag">{tag}</div>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> {t.projects.viewDemo}
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> {t.projects.viewCode}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
