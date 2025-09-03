import React from 'react';
import './FERApage.css';
import PaginaInicialFERA from './paginaInicial-FERA/paginaInicialFERA';
import GuiadoFERA from './guia-FERA/GuiadoFERA';
import MapaPage from './mapa-FERA/MapaPage';
import ImportantContacts from './contatosImportantes-FERA/ImportantContacts';
import FaqSection from './perguntasFrequentes-FERA/FaqSection';
import DicasVeterano from './dicasdeVeterano-FERA/DicasVeterano';
import GuiaFeras from './guiaacademico-FERA/GuiaFeras';

const FeraPage = () => {
  return (
    <div className='ContainerPAGINAFERA'>
        <div id='paginaInicia-FERA' className='paginaincial-FERA'>
            <PaginaInicialFERA/>
        </div>

        <div className='guia-FERA'>
            <GuiadoFERA/>
        </div>

        <div className='mapa-FERA'>
            <MapaPage/>
        </div>

        <div className='dicasdeVeterano-FERA'>
            <DicasVeterano/>
        </div>

        <div className='perguntasFrequentes-FERA'>
            <FaqSection/>
        </div>

        <div className='contatosImportantes-FERA'>
            <ImportantContacts/>
        </div>

        <div className='guiaAcademico-FERA'>
            <GuiaFeras/>
        </div>
    </div>
    

  );
};

export default FeraPage;