import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tab-programming');

  const tabs = [
    { id: 'tab-programming', icon: 'fas fa-code', label: 'Linguagens' },
    { id: 'tab-web', icon: 'fas fa-globe', label: 'Web' },
    { id: 'tab-database', icon: 'fas fa-database', label: 'Banco de Dados' },
    { id: 'tab-tools', icon: 'fas fa-tools', label: 'Ferramentas' },
    { id: 'tab-languages', icon: 'fas fa-language', label: 'Idiomas' },
  ];

  const skillsData = {
    'tab-programming': [
      { icon: 'fab fa-python', name: 'Python', level: 'advanced', tooltip: 'Python - Avançado' },
      { icon: 'fab fa-js-square', name: 'JavaScript', level: 'intermediate', tooltip: 'JavaScript - Intermediário' },
      { icon: 'fab fa-java', name: 'Java', level: 'basic', tooltip: 'Java - Básico' },
      { icon: 'fas fa-c', name: 'C/C++', level: 'intermediate', tooltip: 'C/C++ - Intermediário' },
    ],
    'tab-web': [
      { icon: 'fab fa-html5', name: 'HTML5', level: 'intermediate', tooltip: 'HTML5 - Intermediário' },
      { icon: 'fab fa-css3-alt', name: 'CSS3', level: 'intermediate', tooltip: 'CSS3 - Intermediário' },
      { icon: 'fab fa-react', name: 'React', level: 'intermediate', tooltip: 'React - Intermediário' },
      { 
        icon: 'typescript-svg', 
        name: 'TypeScript', 
        level: 'intermediate', 
        tooltip: 'TypeScript - Intermediário',
        svg: `<svg width="40" height="40" viewBox="0 0 400 400" style="margin-bottom: 15px;">
          <path fill="#007acc" d="M0 200V0h400v400H0"/>
          <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27-16.6-23-11.4-32.4-18.4-37.7-28-2.6-4.8-3.2-7-3.2-12.5 0-10.5 2.3-18.4 7.6-26 9.8-14 28-22.4 48.5-22.4 9.3 0 18.2 2 25.5 5.7l1.2-6.2 3.4-.4z"/>
        </svg>`
      },
      { icon: 'fab fa-angular', name: 'Angular', level: 'intermediate', tooltip: 'Angular - Intermediário' },
    ],
    'tab-database': [
      { icon: 'fas fa-database', name: 'MySQL', level: 'intermediate', tooltip: 'MySQL - Intermediário' },
      { icon: 'fas fa-database', name: 'MongoDB', level: 'intermediate', tooltip: 'MongoDB - Intermediário' },
      { icon: 'fas fa-database', name: 'PostgreSQL', level: 'intermediate', tooltip: 'PostgreSQL - Intermediário' },
      { icon: 'fas fa-database', name: 'Firebase', level: 'basic', tooltip: 'Firebase - Básico' },
    ],
    'tab-tools': [
      { icon: 'fab fa-git-alt', name: 'Git', level: 'advanced', tooltip: 'Git - Avançado' },
      { icon: 'fab fa-docker', name: 'Docker', level: 'basic', tooltip: 'Docker - Básico' },
      { icon: 'fab fa-aws', name: 'AWS', level: 'basic', tooltip: 'AWS - Básico' },
      { icon: 'fab fa-linux', name: 'Linux', level: 'intermediate', tooltip: 'Linux - Intermediário' },
    ],
    'tab-languages': [
      { icon: 'flag-icon-us', name: 'English', level: 'advanced', tooltip: 'Inglês - Avançado' },
      { icon: 'fab fa-flag-spain', name: 'Español', level: 'intermediate', tooltip: 'Espanhol - Intermediário' },
      { icon: 'fab fa-flag-brazil', name: 'Português 🇧🇷', level: 'advanced', tooltip: 'Português - Nativo' },
    ],
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Minhas Habilidades</h2>
          <p>Tecnologias que domino e estou constantemente aprimorando</p>
        </div>

        <div className="skills-tabs animate">
          <nav className="tab-nav">
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={tab.icon}></i> {tab.label}
                </li>
              ))}
            </ul>
          </nav>

          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
              >
                <div className="skills-grid">
                  {skillsData[tab.id].map((skill, index) => (
                    <div
                      key={index}
                      className="skill-item"
                      data-level={skill.level}
                      data-tooltip={skill.tooltip}
                    >
                      {skill.svg ? (
                        <div dangerouslySetInnerHTML={{ __html: skill.svg }} />
                      ) : (
                        <i className={skill.icon}></i>
                      )}
                      <span>{skill.name}</span>
                      <div className={`skill-level ${skill.level}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
