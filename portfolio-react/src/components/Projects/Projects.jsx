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
  const projects = [
    {
      title: 'BichinhoSOS',
      description: 'Bichinho-SOS é um aplicativo móvel, com backend e front-end, criado para centralizar denúncias de animais em risco. Usuários podem criar perfis, registrar ocorrências com fotos e localização — de forma anônima ou identificada. A plataforma fomenta o engajamento através de um feed interativo com curtidas e um sistema de comentários completo, incluindo respostas, edição e exclusão. O perfil do usuário exibe estatísticas e permite gerenciar as próprias publicações.',
      image: doggyImg,
      tags: ['React', 'Node.js', 'Express.js', 'HTML5', 'PostgreSQL', 'Cloudinary API', 'Google API'],
      demo: 'https://github.com/paulosouza-ec/Bichinho-SOS/tree/main',
      github: 'https://github.com/paulosouza-ec/Bichinho-SOS/tree/main'
    },
    {
      title: 'Automotive CAN IDS',
      description: 'Projeto que implementa um sistema de detecção de intrusão em redes veiculares (CAN). Foram simuladas ECUs de diferentes módulos do carro e emulados ataques cibernéticos como DoS, Fuzzing, Replay e Injection em uma Raspberry-Pi. O sistema aprende o comportamento normal do tráfego e identifica desvios em tempo real, oferecendo uma solução acessível e eficaz para aumentar a segurança de veículos modernos.',
      image: canIdsImg,
      tags: ['Python', 'Raspberry Pi', 'Módulos CAN', 'Machine Learning'],
      demo: '',
      github: 'https://github.com/paulosouza-ec/can-automotive-ids'
    },
    {
      title: 'Avotech',
      description: 'Bot que auxilia idosos a encontrar farmácias próximas com medicamentos específicos, utilizando reconhecimento de voz (Vosk), geolocalização (OpenStreetMap) e automação de mensagens. Oferece desde a busca por farmácias até o contato automático com estabelecimentos, confirmando disponibilidade e entregas.',
      image: techImg,
      tags: ['Javascript', 'GoogleAPI', 'WhatsappAPI'],
      demo: 'https://avotech2025.netlify.app/',
      github: 'https://github.com/paulosouza-ec/Avotech'
    },
    {
      title: 'Reconhecedor de sons de sirenes',
      description: 'Projeto de reconhecimento de sons de sirenes utilizando aprendizado de máquina em Python. O sistema extrai características de áudio (espectrograma, loudness e centroide espectral), aplica KMeans para clusterização e SVM para classificação em categorias como ambulância, bombeiro, polícia e alarme, com avaliação por matriz de confusão e curva ROC.',
      image: sirenImg,
      tags: ['Python', 'Machine Learning', 'NLTK'],
      demo: 'https://github.com/paulosouza-ec/Siren-sound-recognizer',
      github: 'https://github.com/paulosouza-ec/Siren-sound-recognizer'
    },
    {
      title: 'A jornada de Rubens',
      description: 'A Jornada de Rubens é um jogo 2D feito em C que acompanha um herói em uma aventura cheia de desafios, inimigos e aliados. Desenvolvido desde a lógica de colisão até os sprites personalizados, o projeto explora fundamentos de programação em jogos, manipulação gráfica e controle de personagens. — Tudo com aquele toque old school de C puro.',
      image: rubensImg,
      tags: ['C', 'Raylib', 'GIT'],
      demo: 'https://github.com/Mathbonc/Game-IP2021',
      github: 'https://github.com/Mathbonc/Game-IP2021'
    },
    {
      title: 'RDT Chatroom',
      description: 'Sistema de chat cliente-servidor com mensagens públicas e privadas, gerenciamento de usuários e função de expulsão. Foi implementado o protocolo RDT 3.0 para garantir transmissão confiável dos dados. A solução inclui interface de linha de comando e armazenamento dinâmico das conexões ativas.',
      image: rdtchatImg,
      tags: ['Python', 'RDT 3.0', 'Sockets'],
      demo: 'https://github.com/paulosouza-ec/ChatUDP_RDT3.0_ChatRoom',
      github: 'https://github.com/paulosouza-ec/ChatUDP_RDT3.0_ChatRoom'
    },
    {
      title: 'Roda-Roda Jequiti',
      description: 'Uma réplica do jogo Roda-Roda Jequiti do programa Silvio Santos feito no oldschool e hardcore Assembly x86.',
      image: rodaImg,
      tags: ['ASX86', 'Linux', 'Git'],
      demo: 'https://github.com/paulosouza-ec/Roda-Roda-Jequiti',
      github: 'https://github.com/paulosouza-ec/Roda-Roda-Jequiti'
    },
    {
      title: 'Preditor de risco cardiáco',
      description: 'Modelo preditivo que analisa 16 indicadores de saúde para estimar probabilidade de doenças cardíacas, alcançando aprox. 85% de acurácia. O sistema permite simulação de diagnóstico com inputs personalizados e utiliza dados reais do CDC americano.',
      image: naiveBaiesImg,
      tags: ['Python', 'Machine Learning', 'Pandas/Scikit L'],
      demo: 'https://github.com/paulosouza-ec/2021.2-Statistics-Project',
      github: 'https://github.com/paulosouza-ec/2021.2-Statistics-Project'
    },
    {
      title: 'Bucho Cheio',
      description: 'O projeto é um sistema de delivery para hamburgueria, desenvolvido em React, com telas de login, cadastro, cardápio e carrinho. Oferece funcionalidades como autenticação de usuários, gerenciamento de produtos (para administradores), validação de formulários e máscaras para CPF, telefone e e-mail.',
      image: buchoImg,
      tags: ['React', 'Angular', 'JS', 'Docker', 'Insomnia', 'Typescript'],
      demo: 'https://github.com/paulosouza-ec/Bucho-Cheio-/tree/master',
      github: 'https://github.com/paulosouza-ec/Bucho-Cheio-/tree/master'
    },
    {
      title: 'Estimativa e predição do COVID-19 em Pernambuco',
      description: 'Utilização de modelos epidemiológicos SEIRDV para prever a progressão da COVID-19 em Pernambuco no ano de 2022, analisando o impacto da vacinação e comparando cenários anteriores.',
      image: covid19Img,
      tags: ['Python', 'Machine Learning', 'Pandas/Scikit L'],
      demo: 'https://github.com/paulosouza-ec/Estimation-and-prediction-of-the-COVID-19-Pernambuco-Brazil',
      github: 'https://github.com/paulosouza-ec/Estimation-and-prediction-of-the-COVID-19-Pernambuco-Brazil'
    }
  ]

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
