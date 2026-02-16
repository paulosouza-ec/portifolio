import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Form submitted:', formData)
    alert('Mensagem enviada! (integração com backend necessária)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <br />
          <h2>Entre em Contato</h2>
          <p>Vamos conversar sobre oportunidades e projetos</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Vamos trabalhar juntos!</h3>
              <p>
                Estou sempre aberto a novas oportunidades, projetos desafiadores e colaborações interessantes. 
                Se você tem uma ideia ou projeto que gostaria de discutir, não hesite em me contatar.
              </p>
              
              <div className="contact-details">
                <div className="contact-item animate">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:paulosouza-ec@gmail.com">paulosouza-ec@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item animate delay-1">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Telefone</h4>
                    <a href="tel:+5581986212657">+55 (81) 98621-2657</a>
                  </div>
                </div>
                
                <div className="contact-item animate delay-2">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Localização</h4>
                    <span>Recife, PE - Brasil</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4 className="animate delay-3">Me siga nas redes sociais</h4>
                <div className="social-icons animate delay-3">
                  <a href="https://www.linkedin.com/in/paulo-souza-862a67292/" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/paulosouza-ec" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://x.com/home" className="social-icon" title="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/paulinho.souzaa_/" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form animate delay-1">
            <div className="form-card">
              <h3>Se preferir, me envie uma mensagem por aqui.</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <div className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="Seu nome completo" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <div className="input-with-icon">
                    <i className="fas fa-tag"></i>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="Sobre o que deseja falar?" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <div className="textarea-with-icon">
                    <i className="fas fa-comment-alt"></i>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="Escreva sua mensagem aqui..."
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
