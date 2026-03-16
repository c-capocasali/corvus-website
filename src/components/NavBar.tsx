import AboutUsButton from "./AboutUsButton";
import HomeButton from "./HomeButton";
import ContactsButton from "./ContactsButton";
import ProjectsButton from "./ProjectsButton";
import MaterialsButton from "./Materials";
import Corvus from "../images/Corvus.png";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  //TODO: Adicionar a lógica de Router
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="navbar-container">
      <div className="corvus-logo">
        <img src={Corvus} alt="Logo Corvus" />
      </div>

      <div className="navbar-div">
        <HomeButton onClick={() => handleClick("/")} />
        <ProjectsButton onClick={() => handleClick("/projetos")} />
        <MaterialsButton onClick={() => handleClick("Materias")} />
        <ContactsButton onClick={() => handleClick("Contatos")} />
        <AboutUsButton onClick={() => handleClick("Sobre Nós")} />
      </div>
    </nav>
  );
}

export default NavBar;
