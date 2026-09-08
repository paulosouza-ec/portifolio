export const translations = {
  'pt-BR': {
    header: {
      ariaTheme: 'Alternar tema',
      ariaLang: 'Alternar idioma'
    },
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Paulo Sérgio',
      roles: ['Desenvolvedor Full Stack', 'Cientista de Dados', 'Engenheiro de Software'],
      description: 'Apaixonado por tecnologia e inovação, transformo ideias em soluções digitais eficientes e escaláveis.',
      cta: 'Ver Projetos',
      contact: 'Entre em Contato'
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Conheça a pessoa por trás do código',
      intro: 'Engenheiro da Computação pela Universidade Federal de Pernambuco. Desde criança, sempre fui fascinado por tecnologia e pelo seu poder de transformar o mundo.',
      description: 'Concluí recentemente a graduação (2026), tendo me dedicado ao longo do curso ao desenvolvimento de software, inteligência artificial, ciência de dados, testes e qualidade de software.',
      focus: 'Acredito que a tecnologia deve ser acessível e útil para todos, por isso direciono o meu conhecimento técnico para a resolução de problemas reais e de impacto social.',
      degree: 'Engenharia da Computação',
      university: 'UFPE | 2020-2026',
      technicalDegree: 'Redes de Computadores',
      technicalSchool: 'ETE Governador Eduardo Campos | 2018'
    },
    skills: {
      title: 'Minhas Habilidades',
      subtitle: 'Tecnologias que domino e estou constantemente aprimorando',
      native: 'Nativo',
      tabs: {
        programming: 'Linguagens',
        web: 'Web',
        database: 'Banco de Dados',
        tools: 'Ferramentas',
        languages: 'Idiomas'
      },
      levels: {
        advanced: 'Avançado',
        intermediate: 'Intermediário',
        basic: 'Básico'
      }
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Alguns dos projetos que desenvolvi/contribui durante minha jornada acadêmica',
      viewCode: 'Código',
      viewDemo: 'Demo',
      items: [
        {
          id: 'doggy',
          title: 'BichinhoSOS',
          description: 'Bichinho-SOS é um aplicativo móvel, com backend e front-end, criado para centralizar denúncias de animais em risco. Usuários podem criar perfis, registrar ocorrências com fotos e localização — de forma anônima ou identificada. A plataforma fomenta o engajamento através de um feed interativo com curtidas e um sistema de comentários completo, incluindo respostas, edição e exclusão. O perfil do usuário exibe estatísticas e permite gerenciar as próprias publicações.',
          tags: ['React', 'Node.js', 'Express.js', 'HTML5', 'PostgreSQL', 'Cloudinary API', 'Google API'],
          demo: 'https://github.com/paulosouza-ec/Bichinho-SOS/tree/main',
          github: 'https://github.com/paulosouza-ec/Bichinho-SOS/tree/main'
        },
        {
          id: 'canIds',
          title: 'Automotive CAN IDS',
          description: 'Projeto que implementa um sistema de detecção de intrusão em redes veiculares (CAN). Foram simuladas ECUs de diferentes módulos do carro e emulados ataques cibernéticos como DoS, Fuzzing, Replay e Injection em uma Raspberry-Pi. O sistema aprende o comportamento normal do tráfego e identifica desvios em tempo real, oferecendo uma solução acessível e eficaz para aumentar a segurança de veículos modernos.',
          tags: ['Python', 'Raspberry Pi', 'Módulos CAN', 'Machine Learning'],
          demo: '',
          github: 'https://github.com/paulosouza-ec/can-automotive-ids'
        },
        {
          id: 'tech',
          title: 'Avotech',
          description: 'Bot que auxilia idosos a encontrar farmácias próximas com medicamentos específicos, utilizando reconhecimento de voz (Vosk), geolocalização (OpenStreetMap) e automação de mensagens. Oferece desde a busca por farmácias até o contato automático com estabelecimentos, confirmando disponibilidade e entregas.',
          tags: ['Javascript', 'GoogleAPI', 'WhatsappAPI'],
          demo: 'https://avotech2025.netlify.app/',
          github: 'https://github.com/paulosouza-ec/Avotech'
        },
        {
          id: 'siren',
          title: 'Reconhecedor de sons de sirenes',
          description: 'Projeto de reconhecimento de sons de sirenes utilizando aprendizado de máquina em Python. O sistema extrai características de áudio (espectrograma, loudness e centroide espectral), aplica KMeans para clusterização e SVM para classificação em categorias como ambulância, bombeiro, polícia e alarme, com avaliação por matriz de confusão e curva ROC.',
          tags: ['Python', 'Machine Learning', 'NLTK'],
          demo: 'https://github.com/paulosouza-ec/Siren-sound-recognizer',
          github: 'https://github.com/paulosouza-ec/Siren-sound-recognizer'
        },
        {
          id: 'rubens',
          title: 'A jornada de Rubens',
          description: 'A Jornada de Rubens é um jogo 2D feito em C que acompanha um herói em uma aventura cheia de desafios, inimigos e aliados. Desenvolvido desde a lógica de colisão até os sprites personalizados, o projeto explora fundamentos de programação em jogos, manipulação gráfica e controle de personagens. — Tudo com aquele toque old school de C puro.',
          tags: ['C', 'Raylib', 'GIT'],
          demo: 'https://github.com/Mathbonc/Game-IP2021',
          github: 'https://github.com/Mathbonc/Game-IP2021'
        },
        {
          id: 'rdtchat',
          title: 'RDT Chatroom',
          description: 'Sistema de chat cliente-servidor com mensagens públicas e privadas, gerenciamento de usuários e função de expulsão. Foi implementado o protocolo RDT 3.0 para garantir transmissão confiável dos dados. A solução inclui interface de linha de comando e armazenamento dinâmico das conexões ativas.',
          tags: ['Python', 'RDT 3.0', 'Sockets'],
          demo: 'https://github.com/paulosouza-ec/ChatUDP_RDT3.0_ChatRoom',
          github: 'https://github.com/paulosouza-ec/ChatUDP_RDT3.0_ChatRoom'
        },
        {
          id: 'roda',
          title: 'Roda-Roda Jequiti',
          description: 'Uma réplica do jogo Roda-Roda Jequiti do programa Silvio Santos feito no oldschool e hardcore Assembly x86.',
          tags: ['ASX86', 'Linux', 'Git'],
          demo: 'https://github.com/paulosouza-ec/Roda-Roda-Jequiti',
          github: 'https://github.com/paulosouza-ec/Roda-Roda-Jequiti'
        },
        {
          id: 'naiveBaies',
          title: 'Preditor de risco cardíaco',
          description: 'Modelo preditivo que analisa 16 indicadores de saúde para estimar probabilidade de doenças cardíacas, alcançando aprox. 85% de acurácia. O sistema permite simulação de diagnóstico com inputs personalizados e utiliza dados reais do CDC americano.',
          tags: ['Python', 'Machine Learning', 'Pandas/Scikit L'],
          demo: 'https://github.com/paulosouza-ec/2021.2-Statistics-Project',
          github: 'https://github.com/paulosouza-ec/2021.2-Statistics-Project'
        },
        {
          id: 'bucho',
          title: 'Bucho Cheio',
          description: 'O projeto é um sistema de delivery para hamburgueria, desenvolvido em React, com telas de login, cadastro, cardápio e carrinho. Oferece funcionalidades como autenticação de usuários, gerenciamento de produtos (para administradores), validação de formulários e máscaras para CPF, telefone e e-mail.',
          tags: ['React', 'Angular', 'JS', 'Docker', 'Insomnia', 'Typescript'],
          demo: 'https://github.com/paulosouza-ec/Bucho-Cheio-/tree/master',
          github: 'https://github.com/paulosouza-ec/Bucho-Cheio-/tree/master'
        },
        {
          id: 'covid19',
          title: 'Estimativa e predição do COVID-19 em Pernambuco',
          description: 'Utilização de modelos epidemiológicos SEIRDV para prever a progressão da COVID-19 em Pernambuco no ano de 2022, analisando o impacto da vacinação e comparando cenários anteriores.',
          tags: ['Python', 'Machine Learning', 'Pandas/Scikit L'],
          demo: 'https://github.com/paulosouza-ec/Estimation-and-prediction-of-the-COVID-19-Pernambuco-Brazil',
          github: 'https://github.com/paulosouza-ec/Estimation-and-prediction-of-the-COVID-19-Pernambuco-Brazil'
        }
      ]
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha jornada profissional e acadêmica',
      items: [
        {
          title: 'Desenvolvedor FullStack',
          company: 'V-Lab / CAPES',
          description: 'Desenvolvedor Full Stack (PHP & Angular) atuando no desenvolvimento, correção de bugs e implementação de melhorias no SISCAD, sistema em produção de cobrança administrativa da CAPES. Responsável pela criação de microsserviços, rotas back-end e interfaces dinâmicas front-end em uma aplicação que processa diretamente pagamentos de beneficiários ativos em escala real, garantindo alta disponibilidade, segurança e estabilidade das operações financeiras.',
          date: '10/2025 - Atualmente'
        },
        {
          title: 'Desenvolvedor Backend IA',
          company: 'Aicury',
          description: 'Desenvolvedor de IA na Aicury (healthtech do POLOTEC UFPE), responsável pelo desenvolvimento de arquiteturas de RAG (Python e LangChain) para consulta de dados clínicos. Atua na implementação de pipelines de IA para o monitoramento e detecção precoce de infecções pós-cirúrgicas, aplicando ciência de dados diretamente no acompanhamento pós-alta hospitalar.',
          date: '09/2025 - 06/2026'
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
    },
    education: {
      title: 'Formação Acadêmica e Cursos complementares',
      subtitle: 'Minha trajetória de aprendizado',
      items: [
        {
          icon: 'fas fa-graduation-cap',
          title: 'Engenharia da Computação',
          institution: 'Universidade Federal de Pernambuco (UFPE)',
          year: '2020 - 2026',
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
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos conversar sobre oportunidades e projetos',
      info: {
        title: 'Vamos trabalhar juntos!',
        description: 'Estou sempre aberto a novas oportunidades, projetos desafiadores e colaborações interessantes. Se você tem uma ideia ou projeto que gostaria de discutir, não hesite em me contatar.',
        emailLabel: 'Email',
        phoneLabel: 'Telefone',
        locationLabel: 'Localização',
        location: 'Recife, PE - Brasil',
        follow: 'Me siga nas redes sociais'
      },
      form: {
        title: 'Se preferir, me envie uma mensagem por aqui.',
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        email: 'Email',
        emailPlaceholder: 'seu@email.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Sobre o que deseja falar?',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
        send: 'Enviar Mensagem',
        alert: 'Mensagem enviada! (integração com backend necessária)'
      }
    },
    backToTop: 'Voltar ao topo'
  },
  'en': {
    header: {
      ariaTheme: 'Toggle theme',
      ariaLang: 'Toggle language'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Paulo Sérgio',
      roles: ['Full Stack Developer', 'Data Scientist', 'Software Engineer'],
      description: 'Passionate about technology and innovation, I transform ideas into efficient and scalable digital solutions.',
      cta: 'View Projects',
      contact: 'Get in Touch'
    },
    about: {
      title: 'About Me',
      subtitle: 'Meet the person behind the code',
      intro: 'Computer Engineer from the Federal University of Pernambuco (UFPE). Since childhood, I have always been fascinated by technology and its power to transform the world.',
      description: 'I recently completed my degree (2026), having dedicated myself throughout the program to software development, artificial intelligence, data science, testing, and software quality.',
      focus: 'I believe that technology should be accessible and useful to everyone, which is why I direct my technical knowledge toward solving real-world problems and creating social impact.',
      degree: 'Computer Engineering',
      university: 'UFPE | 2020-2026',
      technicalDegree: 'Computer Networks',
      technicalSchool: 'ETE Governor Eduardo Campos | 2018'
    },
    skills: {
      title: 'My Skills',
      subtitle: 'Technologies I master and am constantly improving',
      native: 'Native',
      tabs: {
        programming: 'Programming',
        web: 'Web',
        database: 'Database',
        tools: 'Tools',
        languages: 'Languages'
      },
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic'
      }
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Some of the projects I developed/contributed to during my academic journey',
      viewCode: 'Code',
      viewDemo: 'Demo',
      items: [
        {
          id: 'doggy',
          title: 'BichinhoSOS',
          description: 'Bichinho-SOS is a full-stack mobile application created to centralize reports of animals at risk. Users can create profiles and report incidents with photos and geolocation — anonymously or identified. The platform drives engagement through an interactive feed with likes and a full comment system with replies, edits, and deletions, alongside a user profile with personal post statistics.',
          tags: ['React', 'Node.js', 'Express.js', 'HTML5', 'PostgreSQL', 'Cloudinary API', 'Google API'],
          demo: 'https://github.com/paulosouza-ec/Bichinho-SOS/tree/main',
          github: 'https://github.com/paulosouza-ec/Bichinho-SOS/tree/main'
        },
        {
          id: 'canIds',
          title: 'Automotive CAN IDS',
          description: 'Intrusion detection system for vehicular networks (CAN). Simulated ECUs from different vehicle modules and emulated cyberattacks such as DoS, Fuzzing, Replay, and Injection on a Raspberry Pi. The system learns normal traffic patterns and identifies anomalies in real time, delivering an accessible and effective solution to boost modern vehicle security.',
          tags: ['Python', 'Raspberry Pi', 'CAN Modules', 'Machine Learning'],
          demo: '',
          github: 'https://github.com/paulosouza-ec/can-automotive-ids'
        },
        {
          id: 'tech',
          title: 'Avotech',
          description: 'A bot assisting elderly citizens in finding nearby pharmacies with specific medications, using voice recognition (Vosk), geolocation (OpenStreetMap), and message automation. Handles pharmacy discovery through automated communication to verify medication availability and deliveries.',
          tags: ['Javascript', 'GoogleAPI', 'WhatsappAPI'],
          demo: 'https://avotech2025.netlify.app/',
          github: 'https://github.com/paulosouza-ec/Avotech'
        },
        {
          id: 'siren',
          title: 'Siren Sound Recognizer',
          description: 'Machine learning project in Python for siren sound recognition. Extracts audio features (spectrogram, loudness, spectral centroid), applying KMeans for clustering and SVM for multi-class classification into ambulance, fire truck, police, and alarm sounds, evaluated via confusion matrix and ROC curves.',
          tags: ['Python', 'Machine Learning', 'NLTK'],
          demo: 'https://github.com/paulosouza-ec/Siren-sound-recognizer',
          github: 'https://github.com/paulosouza-ec/Siren-sound-recognizer'
        },
        {
          id: 'rubens',
          title: "Rubens' Journey",
          description: "Rubens' Journey is a 2D game created in C following a hero on an adventure packed with challenges, enemies, and allies. Built entirely from scratch—from collision detection to custom sprites—the game explores game programming fundamentals, graphics manipulation, and character physics with classic pure C.",
          tags: ['C', 'Raylib', 'GIT'],
          demo: 'https://github.com/Mathbonc/Game-IP2021',
          github: 'https://github.com/Mathbonc/Game-IP2021'
        },
        {
          id: 'rdtchat',
          title: 'RDT Chatroom',
          description: 'Client-server chat system with public and private messaging, user management, and kick capabilities. Implemented the RDT 3.0 reliable data transfer protocol to ensure reliable communication over sockets. Includes a CLI interface and dynamic tracking of active connections.',
          tags: ['Python', 'RDT 3.0', 'Sockets'],
          demo: 'https://github.com/paulosouza-ec/ChatUDP_RDT3.0_ChatRoom',
          github: 'https://github.com/paulosouza-ec/ChatUDP_RDT3.0_ChatRoom'
        },
        {
          id: 'roda',
          title: 'Roda-Roda Jequiti',
          description: 'A recreation of the famous Brazilian TV game show "Roda-Roda Jequiti", built from the ground up in hardcore, old-school Assembly x86.',
          tags: ['ASX86', 'Linux', 'Git'],
          demo: 'https://github.com/paulosouza-ec/Roda-Roda-Jequiti',
          github: 'https://github.com/paulosouza-ec/Roda-Roda-Jequiti'
        },
        {
          id: 'naiveBaies',
          title: 'Heart Disease Risk Predictor',
          description: 'Predictive model analyzing 16 health indicators to estimate the probability of heart disease, achieving approximately 85% accuracy. Features diagnostic simulations with customized inputs trained on real CDC healthcare data.',
          tags: ['Python', 'Machine Learning', 'Pandas/Scikit L'],
          demo: 'https://github.com/paulosouza-ec/2021.2-Statistics-Project',
          github: 'https://github.com/paulosouza-ec/2021.2-Statistics-Project'
        },
        {
          id: 'bucho',
          title: 'Bucho Cheio Delivery',
          description: 'A food delivery system for a burger restaurant built in React, featuring login, sign-up, interactive menu, and shopping cart. Includes user authentication, administrative product management, form validation, and input masks.',
          tags: ['React', 'Angular', 'JS', 'Docker', 'Insomnia', 'Typescript'],
          demo: 'https://github.com/paulosouza-ec/Bucho-Cheio-/tree/master',
          github: 'https://github.com/paulosouza-ec/Bucho-Cheio-/tree/master'
        },
        {
          id: 'covid19',
          title: 'Estimation and Prediction of COVID-19 in Pernambuco',
          description: 'Application of SEIRDV epidemiological mathematical models to predict COVID-19 progression in Pernambuco (2022), evaluating vaccination impact and comparing historical infection curves.',
          tags: ['Python', 'Machine Learning', 'Pandas/Scikit L'],
          demo: 'https://github.com/paulosouza-ec/Estimation-and-prediction-of-the-COVID-19-Pernambuco-Brazil',
          github: 'https://github.com/paulosouza-ec/Estimation-and-prediction-of-the-COVID-19-Pernambuco-Brazil'
        }
      ]
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional and academic journey',
      items: [
        {
          title: 'Full Stack Developer',
          company: 'V-Lab / CAPES',
          description: 'Full Stack Developer (PHP & Angular) working on the development, bug fixes, and feature enhancements for SISCAD, CAPES’s production-level administrative collection system. Responsible for building microservices, back-end routes, and dynamic front-end interfaces for an application that directly processes active beneficiary payments at scale, ensuring high availability, security, and stability for financial operations.',
          date: '10/2025 - Present'
        },
        {
          title: 'Backend AI Developer',
          company: 'Aicury',
          description: 'AI Developer at Aicury (a healthtech from POLOTEC UFPE), responsible for developing RAG architectures (Python & LangChain) to query clinical data. Implemented AI pipelines for monitoring and early detection of post-surgical infections, applying data science directly to post-discharge patient care.',
          date: '09/2025 - 06/2026'
        },
        {
          title: 'Technology Tutor',
          company: 'Cesar School',
          description: 'Responsible for training high school and adult education (EJA) students in data skills (SQL, Python, Looker, Google Sheets), promoting practical application to prepare them for the tech job market. Developed activities integrating technical concepts and real-world demands, fostering career entry and social transformation through education.',
          date: '07/2024 - 12/2024'
        },
        {
          title: 'Teaching Assistant - Computational Numerical Methods',
          company: 'UFPE',
          description: 'Assisted in grading activities and teaching classes, using ODEs to model scientific problems (e.g., forecasting COVID-19 cases in Python). Guided students in hands-on projects utilizing statistical and numerical analysis libraries in Python.',
          date: '2023 - 2024'
        },
        {
          title: 'Teaching Assistant - Data and Information Management',
          company: 'UFPE',
          description: 'Provided support in relational databases (MySQL, Oracle), using PL/SQL for project development and basic/intermediate queries. Assisted students with data modeling, query optimization, and information management best practices, preparing them for enterprise database challenges.',
          date: '2022 - 2023'
        },
        {
          title: 'PET Scholar (Tutorial Education Program)',
          company: 'UFPE',
          description: 'Collaborated on developing a barcode capture and detection system using Python, OpenCV, and digit detection neural networks, applying image segmentation and processing techniques to optimize automated scanning in production lines.',
          date: '05/2022 - 09/2022'
        }
      ]
    },
    education: {
      title: 'Academic Background and Complementary Courses',
      subtitle: 'My learning journey',
      items: [
        {
          icon: 'fas fa-graduation-cap',
          title: 'Computer Engineering',
          institution: 'Federal University of Pernambuco (UFPE)',
          year: '2020 - 2026',
          description: 'Comprehensive education combining hardware and software, preparing professionals to design computing systems, build embedded solutions, and work in robotics, artificial intelligence, and data science. Includes coursework in electronics, programming, computer architecture, and software engineering for careers in industry, research, automation, and technological innovation.'
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'Technical Degree in Computer Networks',
          institution: 'State Technical School Gov. Eduardo Campos',
          year: '2018',
          description: 'Professional training to install, configure, and manage computer networks, including physical infrastructure, routers, switches, and security. Covers networking protocols (TCP/IP), structured cabling, virtualization, and server administration.'
        },
        {
          icon: 'fas fa-certificate',
          title: 'Python: Developer from Zero to Advanced',
          institution: 'Udemy',
          year: 'Completed',
          description: 'Teaches everything from core fundamentals to advanced techniques, covering libraries such as Pandas, Flask, and Django, alongside practical web development, automation, and data analysis. Includes OOP, file handling, APIs, web scraping, and application deployment.'
        },
        {
          icon: 'fas fa-certificate',
          title: 'JavaScript & TypeScript - Front-end and Back-end (Full Stack)',
          institution: 'Udemy',
          year: 'In progress',
          description: 'Comprehensive full-stack course from basics to advanced, covering front-end (React, Webpack) and back-end (Node, Express, MongoDB, MySQL). Includes REST APIs, security, Linux deployment, Jest testing, SOLID principles, Next.js, Strapi, design patterns, JWT auth, and Redux.'
        },
        {
          icon: 'fas fa-certificate',
          title: 'Data Science: Python, SQL, Machine Learning & AWS',
          institution: 'Udemy',
          year: 'In progress',
          description: 'Covers key data science concepts and tools from R/Python programming and statistics to Machine Learning, Deep Learning, and cloud data processing on AWS. Features hands-on projects with SQL, Spark, and NLP.'
        },
        {
          icon: 'fas fa-certificate',
          title: 'C1 English Level',
          institution: 'EF Education First',
          year: '09/2024',
          description: 'Proficiency in effortlessly reading and comprehending technical papers, reports, and literature. Strong ability to write clear and structured texts across professional contexts, with fluent verbal communication for workplace meetings and everyday conversations.'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s talk about opportunities and projects',
      info: {
        title: 'Let\'s work together!',
        description: 'I am always open to new opportunities, challenging projects and interesting collaborations. If you have an idea or project you would like to discuss, don\'t hesitate to contact me.',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        locationLabel: 'Location',
        location: 'Recife, PE - Brazil',
        follow: 'Follow me on social media'
      },
      form: {
        title: 'If you prefer, send me a message here.',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'What would you like to talk about?',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        send: 'Send Message',
        alert: 'Message sent! (backend integration required)'
      }
    },
    backToTop: 'Back to top'
  }
}
