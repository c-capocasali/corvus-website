import GithubButton from "./GithubButton";
import InstagramButton from "./InstagramButton";
import YoutubeButton from "./YoutubeButton";

//TODO: Colocar os tipos em um arquivo específico
type Plataform = "Youtube" | "Instagram" | "Github";
//Lógica do Footer
function Footer() {
  const handleClick = (plataform: Plataform) => {
    if (plataform == "Youtube") {
      window.open("https://www.youtube.com/@CorvusAI-ICMC", "_blank");
    } else if (plataform == "Instagram") {
      window.open("https://www.instagram.com/corvus.ai_/", "_blank");
    } else if (plataform == "Github") {
      window.open("https://github.com/CorvusAI-ICMC", "_blank");
    }
  };

  return (
    // bg-white = fundo branco
    // flex justify-between = empurra itens para os lados
    // p-4 = padding de 1rem
    // border-t = linha no topo
    <footer className="flex items-center justify-between bg-white p-4 border-t border-gray-200 w-full">
      {/* gap-4 = espaço entre os botões */}
      <div className="flex gap-4">
        <YoutubeButton onClick={() => handleClick("Youtube")} />
        <InstagramButton onClick={() => handleClick("Instagram")} />
        <GithubButton onClick={() => handleClick("Github")} />
      </div>

      {/* text-gray-700 = cor cinza escura */}
      <div className="text-gray-700 text-sm font-sans">© 2026 CorvusAI</div>
    </footer>
  );
}

export default Footer;
