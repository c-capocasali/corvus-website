// src/pages/Home.tsx
import Corvus from "../images/Corvus.png";
import AboutUsButton from "../components/AboutUsButton";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex items-center justify-center min-h-[70vh] gap-3">
      {/* Coluna da Esquerda: O Logo */}
      <div className="flex">
        <img src={Corvus} alt="Logo Corvus AI" className="w-60 h-60" />
      </div>

      {/* Coluna da Direita: Os Textos e o Botão */}
      <div className="flex flex-col gap-3 max-w-sm">
        <h1 className="text-center font-bold text-[30px]">CORVUS AI</h1>
        <p className="text-justify">
          Grupo de Extensão do ICMC-USP focado no aprendizado e desenvolvimento
          de projetos utilizando Inteligência Artificial
        </p>
        <AboutUsButton onClick={() => handleClick("Sobre Nós")} />
      </div>
    </div>
  );
}

export default Home;
