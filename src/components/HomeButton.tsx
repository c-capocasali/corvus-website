type HomeButtonProps = {
  onClick: () => void;
};

function HomeButton({ onClick }: HomeButtonProps) {
  return (
    <button className="home-button" onClick={onClick}>
      Home
    </button>
  );
}

export default HomeButton;
