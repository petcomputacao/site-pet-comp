import './footer.css';

import GoogleMaps from '../../maps/google-maps/google_maps';
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";


function Footer() {
  return (
    <footer className="container-footer">
        <div className='footer__infos'>
              <div className='infos__contatos'>
                  <img src={process.env.PUBLIC_URL + "/images/logos/logo-pet-branco.png"}
                      alt="logo-pet"
                      className='imagem-footer--pet' />

                  <div className="footer__social-links">
                      <a
                          href="https://github.com/petcomputacao"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer__social-link"
                      >
                          <IoLogoGithub className='footer__social-icon--github'/>
                      </a>
                      <a
                          href="https://www.linkedin.com/company/petcomputa-oufcg/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer__social-link"
                      >
                        <FaLinkedin className='footer__social-icon--linkedin' />
                      </a>
                      <a
                          href="https://www.instagram.com/petcomputacaoufcg/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer__social-link"
                      >
                          <FaInstagram className='footer__social-icon--instagram' />
                      </a>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=petcomp@ufcg.edu.br&su=Contato%20PET%20Computa%C3%A7%C3%A3o&body=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida..."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer__social-link"
                      >
                        <CgMail className='footer__social-icon--email' />
                      </a>
                      <a href="https://www.youtube.com/@grupopetcomputacaoufcg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                      >
                        <FaYoutube className='footer__social-icon--youtube' />
                      </a>
                  </div>
              </div>
              <div className='infos__maps'>
                  <GoogleMaps />
              </div>
        </div>
        <div className='footer__copyright'>
            <p className='footer__copyright'>&copy; 2025 PET Computação UFCG. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;