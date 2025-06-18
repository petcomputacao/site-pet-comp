import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Página Inicial</a>
        </li>
        <li className="navbar-item">
          <a href="/projetos" className="navbar-link">Projetos</a>
        </li>
        <li className="navbar-item">
          <a href="/membros" className="navbar-link">Membros</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
