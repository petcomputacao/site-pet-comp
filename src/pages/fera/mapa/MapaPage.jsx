import './MapaPage.css';
import MapaCampusPersonalizado from './MapaCampusPersonalizado';
import { Reveal } from '../../../components/reveal/Reveal.tsx';

const MapaPage = () => {
  return (
    <div className="mapa-campus-container">
      <h1 className="titulo-mapa"><Reveal>Mapa do Campus UFCG</Reveal></h1>
      <div className='mapa-campus-container__mapa'>
        <MapaCampusPersonalizado />
      </div>
    </div>
  );
};

export default MapaPage;
