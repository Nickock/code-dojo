import '../css/Home.css'; 

export function HomeAbout(){
  return (
    <div className="about-container">

      <div className="about-content">
        <section className="about-header">
          <h2>¿Qué es CodeDojo?</h2>
          <p>
            <strong>¿Alguna vez te has enfrentado a codear y el código te ganó la batalla? </strong> 
            ¿Estás cansado de que los bugs te asedien? ¿De que el compilador diga que tienes 
            un error en la línea 27, pero al revisar... en la línea 27 <span>no hay nada escrito<span className="deathIcon">💀</span>? </span>
          </p>
          <p>
            <strong>¡Pues este es tu lugar!</strong> Entrena para ganar esas batallas con total presteza. 
          </p>
          <p>
            CodeDojo es una plataforma interactiva diseñada para desarrolladores que quieren 
            practicar sus habilidades resolviendo desafíos de programación.
            Aquí tienes un entorno donde puedes practicar, aprender y convertirte en un 
            <strong> maestro del código</strong>.
          </p>
        </section>

        <section className="about-section">
          <h2>Objetivo</h2>
          <p>
            La programación es un arte que se perfecciona con práctica constante. 
            El objetivo de esta app es proporcionar las herramientas y el entorno para que 
            desarrolladores de todos los niveles puedan:
          </p>
          <ul className="features-list">
            <li>🧠 Practicar diseño de algoritmos</li>
            <li>⭐ Utilizar estructura de datos</li>
            <li>🎯 Desafiar sus límites con problemas complejos</li>
            <li>✨ Divertirse en el proceso</li>
          </ul>
          <p>
            Aunque el editor ejecuta JavaScript, los desafíos abarcan temáticas
            que son inherentes al lenguaje de programación en el que se implementen. De este modo,
            <strong> los conceptos aprendidos son aplicables a cualquier lenguaje.</strong>
          </p>
        </section>

        <section className="about-section">
          <h2>Características Principales</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Editor Integrado (JavaScript)</h3>
              <p>Editor de código poderoso basado en Monaco (VS Code) con sintaxis highlight y autocompletado.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Ejecución en Tiempo Real</h3>
              <p>Ejecuta tu código directamente en el navegador y ve los resultados al instante.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Biblioteca de Desafíos</h3>
              <p>Desafíos organizados por dificultad y categoría: algoritmos, estructuras de datos, etc.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Tecnologías utilizadas</h2>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Monaco Editor</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Vite</span>
          </div>
        </section>

        <section className="about-section">
          <h2>Ideas a futuro</h2>
          <p>¡Hola! Soy Nicolás, el desarrollador de la app y un estudiante de Ingeniería en Computación.</p>
          
          <div className="next-steps">
            <div className="step">
              <h4>🔝 Ampliar la biblioteca de desafíos</h4>
              <p>Nuevos desafíos que abarquen distintas áreas.</p>
            </div>
            <div className="step">
              <h4>🎯 Otros paradigmas</h4>
              <p>Desafíos diseñados pensando en el paradigma orientado a objetos y programación funcional.</p>
            </div>
            <div className="step">
              <h4>🔥 Otros lenguajes</h4>
              <p>Aumentar el catálogo de lenguajes que el editor es capaz de comprender.</p>
            </div>
            <div className="step">
              <h4>📈 Seguimiento del aprendizaje</h4>
              <p>Por el momento no hay una forma explícita de medir la evolución a lo largo de la resolución de los desafíos.</p>
              <p>Por lo tanto, la idea es implementar un sistema que permita registrar el avance personal de cada uno.</p>
            </div>
            <div className="step">
            <h4>💪 Sistema de Retroalimentación</h4>
              <p>Implementar un mecanismo para que los usuarios puedan reportar errores,</p>
              <p>sugerir mejoras y contribuir con nuevos desafíos, mejorando continuamente</p>
              <p>la fiabilidad, diversidad y calidad de la plataforma.</p>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

