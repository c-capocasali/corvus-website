import AboutUsButton from "./AboutUsButton";
import HomeButton from "./HomeButton";
import ContactsButton from "./ContactsButton";
import ProjectsButton from "./ProjectsButton";
import MaterialsButton from "./Materials";
import Corvus from "../images/Corvus.png";
import "./NavBar.css";

function NavBar() {
  //TODO: Adicionar a lógica de Router
  const handleClick = (selectedButton: string) => {
    console.log(selectedButton);
  };

  return (
    <nav className="navbar-container">
      <div className="corvus-logo">
        <img src={Corvus} alt="Logo Corvus" />
      </div>

      <div className="navbar-div">
        <HomeButton onClick={() => handleClick("Home")} />
        <ProjectsButton onClick={() => handleClick("Projetos")} />
        <MaterialsButton onClick={() => handleClick("Materias")} />
        <ContactsButton onClick={() => handleClick("Contatos")} />
        <AboutUsButton onClick={() => handleClick("Sobre Nós")} />
      </div>
    </nav>
  );
}

export default NavBar;
