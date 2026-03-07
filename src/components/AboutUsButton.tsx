type AboutUsButtonProps = {
  onClick: () => void;
};

function AboutUsButton({ onClick }: AboutUsButtonProps) {
  return (
    <button className="aboutus-button" onClick={onClick}>
      Sobre Nós
    </button>
  );
}

export default AboutUsButton;
