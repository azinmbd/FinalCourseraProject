import logo from "../assets/Logo.png";
import Nav from "../Comps/Nav";
function Header() {
  return (
    <header className="header">
      <img  className="col-2-md" src={logo} width={200} />
      <Nav />
    </header>
  );
}

export default Header;
