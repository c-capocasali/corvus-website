import GithubButton from "./GithubButton";
import InstagramButton from "./InstagramButton";
import YoutubeButton from "./YoutubeButton";
import "./Footer.css";

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
    <footer className="footer-container">
      <div className="footer-icons">
        <YoutubeButton onClick={() => handleClick("Youtube")} />
        <GithubButton onClick={() => handleClick("Github")} />
        <InstagramButton onClick={() => handleClick("Instagram")} />
      </div>

      <div className="footer-copyright">© 2026 CorvusAI</div>
    </footer>
  );
}

export default Footer;
