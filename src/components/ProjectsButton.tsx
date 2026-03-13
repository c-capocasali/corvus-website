type ProjectsButtonProps = {
  onClick: () => void;
};

function ProjectsButton({ onClick }: ProjectsButtonProps) {
  return (
    <button className="projects-button" onClick={onClick}>
      Projetos
    </button>
  );
}

export default ProjectsButton;
