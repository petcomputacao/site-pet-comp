import './MapaPage.css';
import { FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

const MapaPage = () => {
  return (
    <div className="mapa-campus-container">
      <h1 className="titulo-mapa">Mapa do Campus UFCG</h1>
    
    <div className='box-mapa-FERA'>
      {/* Card de alerta (simulação do Mapbox) */}
      <div className="alerta-mapbox-card">
        {/* Imagem genérica no lugar do mapbox */}
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
      </div>

      {/* Blocos */}
      <div className="blocos-container">
        <div className="bloco-card bloco-azul">
            <h3><FaMapMarkerAlt /> Bloco CP</h3>
            <p>Principal espaço do curso de Computação, com salas e laboratórios (LCC's).</p>
        </div>

        <div className="bloco-card bloco-vermelho">
            <h3><FaMapMarkerAlt /> Bloco CAA</h3>
            <p>Local de aulas de Matemática, com salas bem amplas e bem localizadas.</p>
        </div>

        <div className="bloco-card bloco-verde">
            <h3><FaMapMarkerAlt /> Bloco RE</h3>
            <p>Setores administrativos e algumas das principais salas para o curso de Computação.</p>
        </div>

      </div>
      </div>
    </div>
  );
};

export default MapaPage;
