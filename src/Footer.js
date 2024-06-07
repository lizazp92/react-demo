import logo192 from "./images/logo192.png";

function Footer() {
  const reactHref = "https://react.dev/learn";
  return (
    <footer className="Footer d-flex justify-content-between align-items-center align-content-center">
      <p>2024 Demo React App.</p>
      <a href={reactHref}>
        <img src={logo192} className="Footer-logo" alt="logo" />
      </a>
    </footer>
  );
}

export default Footer;
