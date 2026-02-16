import './Education.css'

const Education = () => {
  const educationItems = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Engenharia da Computação',
      institution: 'Universidade Federal de Pernambuco (UFPE)',
      year: '2020 - 2025',
      description: 'Formação abrangente que combina hardware e software, preparando profissionais para projetar sistemas computacionais, desenvolver soluções embarcadas e atuar em áreas como robótica, inteligência artificial e ciência de dados. Inclui disciplinas de eletrônica, programação, arquitetura de computadores e engenharia de software. Prepara para atuar em indústria, pesquisa, automação e desenvolvimento de tecnologias inovadoras.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Curso técnico em redes de Computadores',
      institution: 'Escola Técnica Estadual Gov. Eduardo Campos',
      year: '2018',
      description: 'Formação profissional para instalar, configurar e gerenciar redes de computadores, incluindo infraestrutura, roteadores, switches e segurança. Abrange protocolos de rede (TCP/IP), cabeamento estruturado, virtualização e administração de servidores.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Python: Desenvolvedor do Zero ao Avançado',
      institution: 'Udemy',
      year: 'Concluído',
      description: 'O curso ensina desde fundamentos básicos até técnicas avançadas, abrangendo bibliotecas como Pandas, Flask e Django, além de aplicações práticas como desenvolvimento web, automação e análise de dados. Para além do básico, inclui POO, manipulação de arquivos, APIs, web scraping e deploy de aplicações.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Javascript e TypeScript - front-end e back-end (Full Stack)',
      institution: 'Udemy',
      year: 'Em andamento',
      description: 'Curso completo de JavaScript e TypeScript do básico ao avançado, cobrindo front-end (React, Webpack) e back-end (Node, Express, MongoDB, MySQL) para formação full-stack. Inclui APIs REST, segurança, deploy em Linux, testes com Jest, princípios SOLID, Next.js, Strapi e design patterns. Projetos reais com CRUD, autenticação (JWT), React Hooks, Redux e TypeScript para aplicações modernas.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Data Science: Python, SQL, Machine Learning e AWS',
      institution: 'Udemy',
      year: 'Em andamento',
      description: 'Este curso de Data Science reúne os principais conceitos e ferramentas da área, desde programação em R/Python e estatística até Machine Learning, Deep Learning e processamento de dados em nuvem (AWS). Com videoaulas didáticas, exemplos práticos e abordagem de tecnologias como SQL, Spark e NLP.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'C1 English Level',
      institution: 'EF Education First',
      year: '09/2024',
      description: 'Capacidade de leitura e compreensão com facilidade de desde artigos técnicos e relatórios até obras literárias. Tenho habilidade para escrever textos claros e bem estruturados, adequados para diferentes contextos profissionais. Minha comunicação oral me permite interagir naturalmente em reuniões de trabalho e situações cotidianas, expressando ideias com clareza.'
    }
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <h2>Formação Acadêmica e Cursos complementares</h2>
          <p>Minha trajetória de aprendizado</p>
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
