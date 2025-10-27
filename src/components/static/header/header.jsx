import './header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='navbar-container'>
      <div className='image-navbar-container'>
        <img
          src={process.env.PUBLIC_URL + "/images/logos/logo-pet-branco.png"}
          alt="Logo PET Navbar"
          className="logoPET-image-navbar"
        />
      </div>

      <div className='buttons-navbar-container'>
        <ul className="navbar-list">
          <li className="navbar-item">
            <button
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => navigate('/')}
            >
              Página do PET
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${location.pathname === '/fera' ? 'active' : ''}`}
              onClick={() => navigate('/fera')}
            >
              Página do FERA
            </button>
          </li>
        </ul>
      </div>

      <div className='redeSocial-navbar-container'>
        <a 
          href="https://www.instagram.com/petcomputacaoufcg/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link">
          <FaInstagram className='social-icon' />
        </a>
      </div>
    </div>
  );
}

export default Header;