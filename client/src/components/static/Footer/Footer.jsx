import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-footer">
        <div className='footer__imagens'>
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-computacao.png"} 
                 alt="logo-computacao" />
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-pet-branco.png"} 
                 alt="logo-pet" />
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"} 
                 alt="logo-ufcg" />
        </div>

        <div className='footer__redes-copyright'>

        </div>

        <div className='footer__maps'>

        </div>
    </footer>
  );
};

export default Footer;