//Import das imagens usadas
import corvusImg from "../images/Corvus.png";

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
    <div className="flex flex-col items-center text-center border border-white p-6 rounded-xl w-full h-full">
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold">{projectTitle}</div>
        <div className="text-sm text-zinc-400 leading-relaxe">
          {projectText}
        </div>
      </div>

      <img src={imgUrl} alt="Imagem do Projeto" className="w-32 h-32"></img>
    </div>
  );
};

//TODO: Adicionar os textos relativos aos projetos;
function Projects() {
  const corvusProjects: corvusProjectsProps[] = [
    {
      id: "1",
      title: "Tensor Processor Unit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: corvusImg,
    },
    {
      id: "2",
      title: "Magnus Corvus",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: "PlaceHolder",
    },

    {
      id: "3",
      title: "Reconhecimento de Imagens Falsa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: "/images/Corvus.png",
    },

    {
      id: "4",
      title: "NLAF",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: "PlaceHolder",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
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
