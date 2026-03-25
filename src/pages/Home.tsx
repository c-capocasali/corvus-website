// src/pages/Home.tsx
import Corvus from "../images/Corvus.png";
function Home() {
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
        <button className="font-bold text-[23px]">Saiba mais</button>
      </div>
    </div>
  );
}

export default Home;
