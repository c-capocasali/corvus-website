type MaterialsButtonProps = {
  onClick: () => void;
};

function MaterialsButton({ onClick }: MaterialsButtonProps) {
  return (
    <button className="materials-button" onClick={onClick}>
      Materiais
    </button>
  );
}

export default MaterialsButton;
