//Import das imagens usadas
import tpu_image from "../images/tpu_image.jpg";
import nlaf_image from "../images/mlp_branco.png";
import magnus_image from "../images/magnus-corvus.jpg";
import fake_image from "../images/fake.jpg";
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
    <div className="flex flex-col items-center text-justify border border-white p-6 rounded-xl w-full h-full">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-3xl font-bold">{projectTitle}</div>
        <img src={imgUrl} alt="Imagem do Projeto" className="w-50 h-32"></img>
        <div className="text-sm text-zinc-300 leading-relaxed text-justify w-full">
          {projectText}
        </div>
      </div>
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
      img: tpu_image,
    },
    {
      id: "2",
      title: "Magnus Corvus",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: magnus_image,
    },

    {
      id: "3",
      title: "Reconhecimento de Imagens Falsas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: fake_image,
    },

    {
      id: "4",
      title: "Nonlinear Additive Feature Engineering",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      img: nlaf_image,
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
