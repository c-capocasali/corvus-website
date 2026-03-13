type ContactsButtonProps = {
  onClick: () => void;
};

function ContactsButton({ onClick }: ContactsButtonProps) {
  return (
    <button className="contact-button" onClick={onClick}>
      Contatos
    </button>
  );
}

export default ContactsButton;
