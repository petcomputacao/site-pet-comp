import './Footer.css';

import MapsLocation from '../MapsLocation';

const Footer = () => {
  return (
    <footer className="container-footer">
        <div className='footer__imagens'>
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-computacao.png"} 
                 alt="logo-computacao"
                 className='imagem-footer' />
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-pet.png"} 
                 alt="logo-pet"
                 className='imagem-footer' />
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"} 
                 alt="logo-ufcg"
                 className='imagem-footer' />
        </div>

        <hr />

        <div className='footer__redes-copyright'>
            <h2 className='fale-conosco__h2'>Fale Conosco!</h2>
            <div className="footer__social-links">
                <a
                    href="https://github.com/petcomputacao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="footer__social-icon"
                    >
                        <path d="M12 .297c-6.6 0-12 5.4-12 12 0 5.3 3.438 9.8 8.207 11.387.6.112.793-.263.793-.582 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.204.086 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.42-1.305.763-1.605-2.665-.3-5.467-1.33-5.467-5.927 0-1.308.47-2.376 1.236-3.215-.123-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.654.243 2.873.12 3.176.77.84 1.236 1.907 1.236 3.215 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.1.823 2.22 0 1.606-.015 2.9-.015 3.293 0 .322.19.698.8.58A12.007 12.007 0 0 0 24 12.297c0-6.6-5.4-12-12-12"/>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/company/petcomputa-oufcg/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="footer__social-icon"
                    >
                        <path d="M20.447 20.452H16.89v-5.569c0-1.328-.025-3.038-1.852-3.038-1.853 0-2.136 1.445-2.136 2.939v5.668H9.34V9h3.415v1.561h.047c.476-.9 1.635-1.852 3.367-1.852 3.6 0 4.268 2.368 4.268 5.452v6.291zM5.337 7.433c-1.095 0-1.982-.888-1.982-1.983 0-1.096.887-1.984 1.982-1.984s1.983.888 1.983 1.984c0 1.095-.888 1.983-1.983 1.983zm1.78 13.019H3.557V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.541C0 23.22.792 24 1.771 24h20.451c.978 0 1.778-.78 1.778-1.729V1.73c0-.956-.8-1.73-1.779-1.73z"/>
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com/petcomputacaoufcg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="footer__social-icon"
                        >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                </a>
            </div>
            <div className='fale-conosco__email'>
                <img src={process.env.PUBLIC_URL + '/images/logos/logo_email.png'} 
                     alt="logo-email" 
                     className='logo-email' />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=petcomp@ufcg.edu.br&su=Contato%20PET%20Computa%C3%A7%C3%A3o&body=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida..."
                       target='_blank'
                       rel='noopener noreferrer'
                    >
                    pet@ccc.ufcg.edu.br
                </a>
            </div>
            <p className='footer__copyright'>&copy; 2025 PET Computação UFCG. Todos os direitos reservados.</p>
        </div>

        <hr />

        <div className='footer__maps'>
            {/* <h2 className='maps__h2'>Onde nos encontrar</h2> */}
            <MapsLocation />
        </div>
    </footer>
  );
};

export default Footer;