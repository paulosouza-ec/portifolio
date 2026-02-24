import './Experience.css'

const Experience = ({ t }) => {
  const experiences = [

     {
      title: 'Desenvolvedor FullStack',
      company: 'V-Lab  / CAPES',
      description: 'Responsável por capacitar estudantes de Ensino Médio e EJA em habilidades de dados (SQL, Python, Looker, Google Sheets), promovendo a aplicação prática para prepará-los para o mercado de tecnologia. Desenvolvi atividades que integram conceitos técnicos e demandas reais, visando a inserção profissional e transformação social por meio da educação.',
      date: '10/2025 - Atualmente'
    },

    {
      title: 'Estágio em Ciência de dados',
      company: 'Aicury',
      description: 'Responsável por capacitar estudantes de Ensino Médio e EJA em habilidades de dados (SQL, Python, Looker, Google Sheets), promovendo a aplicação prática para prepará-los para o mercado de tecnologia. Desenvolvi atividades que integram conceitos técnicos e demandas reais, visando a inserção profissional e transformação social por meio da educação.',
      date: '09/2025 - Atualmente'
    },
    
    {
      title: 'Tutor de tecnologia',
      company: 'Cesar School',
      description: 'Responsável por capacitar estudantes de Ensino Médio e EJA em habilidades de dados (SQL, Python, Looker, Google Sheets), promovendo a aplicação prática para prepará-los para o mercado de tecnologia. Desenvolvi atividades que integram conceitos técnicos e demandas reais, visando a inserção profissional e transformação social por meio da educação.',
      date: '07/2024 - 12/2024'
    },
    {
      title: 'Monitoria de Métodos Numéricos Computacionais',
      company: 'UFPE',
      description: 'Auxilio na correção de atividades e ministração de aulas, utilizando EDOs para modelagem de problemas científicos (ex.: previsão de casos de COVID-19 em Python). Orientei alunos no desenvolvimento de projetos práticos com bibliotecas de estatística e análise numérica em Py.',
      date: '2023 - 2024'
    },
    {
      title: 'Monitoria de Gerenciamento de dados e informações',
      company: 'UFPE',
      description: 'Ministrei suporte em bancos de dados relacionais (MySQL, Oracle), utilizando PL/SQL para desenvolvimento de projetos e consultas básicas/intermediárias. Auxiliei os alunos em modelagem de dados, otimização de queries e boas práticas em gestão de informações, preparando-os para desafios em bancos de dados corporativos.',
      date: '2022 - 2023'
    },
    {
      title: 'Bolsista no Programa de Extensão Tutorial (PET)',
      company: 'UFPE',
      description: 'Desenvolvi, em grupo, um sistema de captura e detecção de códigos de barras usando Python, OpenCV e redes de detecção de dígitos, aplicando técnicas de segmentação e processamento de imagens para otimizar a leitura automática em linhas de produção.',
      date: '05/2022 - 09/2022'
    }
  ]

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
