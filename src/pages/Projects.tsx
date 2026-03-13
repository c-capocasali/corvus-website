//Interfaces da Página
interface ProjectItemProps {
  projectText: string;
  projectTitle: string;
  imgUrl: string;
}

interface corvusProjectsProps {
  id: string;
  title: string;
  text: string;
  img: string;
}

const ProjectItem = ({
  projectText,
  projectTitle,
  imgUrl,
}: ProjectItemProps) => {
  return (
    <div className="project-wrapper">
      <div className="project-description">
        <div className="project-title">{projectTitle}</div>
        <div className="project-text">{projectText}</div>
      </div>

      <img src={imgUrl} alt="PlaceHolder"></img>
    </div>
  );
};

//TODO: Adicionar os textos relativos aos projetos;
function Projects() {
  const corvusProjects: corvusProjectsProps[] = [
    {
      id: "1",
      title: "Tensor Processor Unit",
      text: "PlaceHolder1",
      img: "PlaceHolder",
    },
    {
      id: "2",
      title: "Magnus Corvus",
      text: "PlaceHolder",
      img: "PlaceHolder",
    },

    {
      id: "3",
      title: "Reconhecimento de Imagens Falsa",
      text: "PlaceHolder",
      img: "PlaceHolder",
    },

    {
      id: "4",
      title: "NLAF",
      text: "PlaceHolder",
      img: "PlaceHolder",
    },
  ];

  return (
    <div className="projectContainer">
      {corvusProjects.map((item) => (
        <ProjectItem
          key={item.id}
          projectTitle={item.title}
          projectText={item.text}
          imgUrl={item.img}
        />
      ))}
    </div>
  );
}

export default Projects;
