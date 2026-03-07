import AboutUsButton from "./AboutUsButton";
import HomeButton from "./HomeButton";
import ContactsButton from "./ContactsButton";
import ProjectsButton from "./ProjectsButton";
import MaterialsButton from "./Materials";
import "./NavBar.css";

function NavBar() {
  //TODO: Adicionar a lógica de Router
  const handleClick = (selectedButton: string) => {
    console.log(selectedButton);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-div">
        <HomeButton onClick={() => handleClick("Home")}></HomeButton>
        <ProjectsButton
          onClick={() => handleClick("Projetos")}
        ></ProjectsButton>
        <MaterialsButton
          onClick={() => handleClick("Materias")}
        ></MaterialsButton>
        <ContactsButton
          onClick={() => handleClick("Contatos")}
        ></ContactsButton>
        <AboutUsButton onClick={() => handleClick("Sobre Nós")}></AboutUsButton>
      </div>
    </nav>
  );
}

export default NavBar;
