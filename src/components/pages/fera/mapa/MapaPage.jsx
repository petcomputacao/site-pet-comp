import './MapaPage.css';
// eslint-disable-next-line no-unused-vars
import MapaCampusPersonalizado from './MapaCampusPersonalizado';
import { Reveal } from '../../../static/Reveal.tsx'

const MapaPage = () => {
  return (
    <div className="mapa-campus-container">
      <h1 className="titulo-mapa"><Reveal>Mapa do Campus UFCG</Reveal></h1>
    
      <div className='box-mapa-FERA'>
          <a
              href="https://portal.ufcg.edu.br/phocadownload/userupload/mapas/Planta-UFCG-PDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Reveal>
                <img
                    src={process.env.PUBLIC_URL + "/images/Planta-UFCG-PDF.png"} 
                    alt="Mapa genérico"
                    className="imagem-mapa"
                />
                </Reveal>
              </a>
          {/* por algum motivo, a conta acadêmica bloqueia a visualização do mapa */}
          {/* <MapaCampusPersonalizado /> */}
      </div>
    </div>
  );
};

export default MapaPage;
