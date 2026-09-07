import { useState } from 'react';
import './Skills.css';

const Skills = ({ t }) => {
  const [activeTab, setActiveTab] = useState('tab-programming');

  const tabs = [
    { id: 'tab-programming', icon: 'fas fa-code', label: t.skills.tabs.programming },
    { id: 'tab-web', icon: 'fas fa-globe', label: t.skills.tabs.web },
    { id: 'tab-database', icon: 'fas fa-database', label: t.skills.tabs.database },
    { id: 'tab-tools', icon: 'fas fa-tools', label: t.skills.tabs.tools },
    { id: 'tab-languages', icon: 'fas fa-language', label: t.skills.tabs.languages },
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
      { 
        flag: 'US', 
        name: 'English', 
        level: 'advanced', 
        tooltip: 'Avançado', 
        levelText: 'C1',
        flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <rect width="7410" height="3900" fill="#b22234"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300"/>
          <rect width="2964" height="2100" fill="#3c3b6e"/>
          <g fill="#fff">
            <g id="s18">
              <g id="s9">
                <g id="s5">
                  <g id="s4">
                    <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
                    <use href="#s" y="420"/>
                    <use href="#s" y="840"/>
                    <use href="#s" y="1260"/>
                  </g>
                  <use href="#s" y="1680"/>
                </g>
                <use href="#s4" x="247" y="210"/>
              </g>
              <use href="#s9" x="494"/>
            </g>
            <use href="#s18" x="988"/>
            <use href="#s9" x="1976"/>
            <use href="#s5" x="2470"/>
          </g>
        </svg>`
      },
      { 
        flag: 'ES', 
        name: 'Español', 
        level: 'intermediate', 
        tooltip: 'Intermediário', 
        levelText: 'B1',
        flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <rect width="750" height="500" fill="#c60b1e"/>
          <rect width="750" height="250" y="125" fill="#ffc400"/>
          <g transform="translate(175, 250)">
            <circle cx="200" cy="0" r="50" fill="#c60b1e"/>
            <circle cx="200" cy="0" r="35" fill="#ffc400"/>
          </g>
        </svg>`
      },
      { 
        flag: 'BR', 
        name: 'Português BR', 
        level: 'advanced', 
        tooltip: 'Nativo', 
        levelText: 'Nativo',
        flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <rect width="720" height="504" fill="#009b3a"/>
          <path d="M360,453.33 0,252 360,50.67 720,252z" fill="#fedf00"/>
          <circle cx="360" cy="252" r="100.8" fill="#002776"/>
          <path d="M440,252a80,80 0 0 1-160,0" fill="#fff"/>
          <path d="M287,260 a75,75 0 0,0 146,0" fill="#002776"/>
        </svg>`
      },
    ],
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>{t.skills.title}</h2>
          <p>{t.skills.subtitle}</p>
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
                      className={`skill-item ${skill.flag ? 'language-item' : ''}`}
                      data-level={skill.level}
                      data-tooltip={skill.tooltip}
                    >
                      {skill.flag ? (
                        <>
                          <div className="flag-icon" dangerouslySetInnerHTML={{ __html: skill.flagSvg }} />
                          <span className="language-name">{skill.name}</span>
                          {skill.levelText && <span className="level-badge">{skill.levelText}</span>}
                        </>
                      ) : skill.svg ? (
                        <>
                          <div dangerouslySetInnerHTML={{ __html: skill.svg }} />
                          <span>{skill.name}</span>
                        </>
                      ) : (
                        <>
                          <i className={skill.icon}></i>
                          <span>{skill.name}</span>
                        </>
                      )}
                      {!skill.flag && <div className={`skill-level ${skill.level}`}></div>}
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
