//TODO: Simple icons não tem LinkedIN. Pesquisar outros sites com ícones SVG
type LinkedinButtonProps = {
  onClick: () => void;
};

function LinkedinButton({ onClick }: LinkedinButtonProps) {
  return <button className="linkedin-button" onClick={onClick}></button>;
}

export default LinkedinButton;
