import './About.css'
import drawImage from '../../assets/draw.png'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate">Sobre Mim</h2>
          <p className="section-subtitle animate delay-1">Conheça a pessoa por trás do código</p>
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
                <p>Sou estudante de Engenharia da Computação na UFPE, vivo em Recife. Desde criança sempre fui fascinado por tecnologia e como ela pode transformar o mundo.</p>
              </div>
              
              <div className="text-block">
                <p>Atualmente, estou no último ano do curso e tenho me dedicado ao estudo de desenvolvimento de software, inteligência artificial, ciência de dados, testes e qualidade de software</p>
              </div>
              
              <div className="text-block">
                <p>Acredito que a tecnologia deve ser acessível e útil para todos, por isso, dedico o meu conhecimento técnico, na maioria das vezes, à resolução de problemas sociais.</p>
              </div>
            </div>
            
            {/* Timeline Educacional */}
            <div className="education-timeline animate delay-2">
              <div className="timeline-item">
                <div className="timeline-badge"><i className="fas fa-graduation-cap"></i></div>
                <div className="timeline-content">
                  <h3>Engenharia da Computação</h3>
                  <p>UFPE | 2020-2026</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge"><i className="fas fa-graduation-cap"></i></div>
                <div className="timeline-content">
                  <h3>Redes de Computadores</h3>
                  <p>ETE Governador Eduardo Campos | 2018</p>
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
