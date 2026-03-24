// src/pages/Home.tsx
import Corvus from "../images/Corvus.png";
function Home() {
  return (
    <div className="flex items-center">
      {/* Coluna da Esquerda: O Logo */}
      <div className="w-30 h-20">
        <img src={Corvus} alt="Logo Corvus AI" className="home-logo" />
      </div>

      {/* Coluna da Direita: Os Textos e o Botão */}
      <div className="items-center text-justify">
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
