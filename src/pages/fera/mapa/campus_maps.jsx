import './campus_maps.css';
import CampusMapsMaptiler from '../../../components/maps/campus-maps/campus_maps_maptiler.jsx';
import { Reveal } from '../../../components/reveal/reveal.tsx';

const CampusMaps = () => {
  return (
    <div className="mapa-campus-container">
      <h1 className="titulo-mapa"><Reveal>Mapa do Campus UFCG</Reveal></h1>
      <div className='mapa-campus-container__mapa'>
        <CampusMapsMaptiler />
      </div>
    </div>
  );
};

export default CampusMaps;