import './Experience.css'

const Experience = ({ t }) => {
  const experiences = t.experience.items || []

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>{t.experience.title}</h2>
          <p>{t.experience.subtitle}</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
              <div className="timeline-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
