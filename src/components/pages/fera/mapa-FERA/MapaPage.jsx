import './MapaPage.css';
// eslint-disable-next-line no-unused-vars
import MapaCampusPersonalizado from './MapaCampusPersonalizado';


const MapaPage = () => {
  return (
    <div className="mapa-campus-container">
      <h1 className="titulo-mapa">Mapa do Campus UFCG</h1>
    
      <div className='box-mapa-FERA'>
          <a
              href="https://portal.ufcg.edu.br/phocadownload/userupload/mapas/Planta-UFCG-PDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img
                    src={process.env.PUBLIC_URL + "/images/Planta-UFCG-PDF.png"} 
                    alt="Mapa genérico"
                    className="imagem-mapa"
                />
              </a>
          {/* por algum motivo, a conta acadêmica bloqueia a visualização do mapa */}
          {/* <MapaCampusPersonalizado /> */}
      </div>
    </div>
  );
};

export default MapaPage;
