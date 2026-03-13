// src/pages/Home.tsx
import Corvus from "../images/Corvus.png";
import "./Home.css"; // Não esqueça de criar e importar este arquivo!

function Home() {
  return (
    <div className="home-container">
      {/* Coluna da Esquerda: O Logo */}
      <div className="home-logo-wrapper">
        <img src={Corvus} alt="Logo Corvus AI" className="home-logo" />
      </div>

      {/* Coluna da Direita: Os Textos e o Botão */}
      <div className="home-content">
        <h1 className="home-title">CORVUS AI</h1>
        <p className="home-text">
          Grupo de Extensão do ICMC USP focado no desenvolvimento de projetos
          utilizando Inteligência Artificial
        </p>
        <button className="home-button">Saiba mais</button>
      </div>
    </div>
  );
}

export default Home;
