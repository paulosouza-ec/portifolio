import './Education.css'

const Education = ({ t }) => {
  const educationItems = t.education.items || []

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <h2>{t.education.title}</h2>
          <p>{t.education.subtitle}</p>
          <br />
        </div>
        <div className="education-grid">
          {educationItems.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <p className="education-year">{item.year}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
