import './FeraPage.css';

import PaginaInicialFERA from './home/paginaInicialFERA';
import GuiadoFERA        from './guia/GuiadoFERA';
import MapaPage          from './mapa/MapaPage';
import ImportantContacts from './contatos-importantes/ImportantContacts';
import FaqSection        from './faq/FaqSection';
import DicasVeterano     from './dicas-veterano/DicasVeterano';
import GuiaFeras         from './guia-disciplinas/GuiaFeras';
import AutoPlay          from '../../static/Autoplay';


const FeraPage = () => {
  return (
    <section className='ContainerPAGINAFERA'>
        <section id='paginaInicia-FERA' className='paginaincial-FERA'>
            <PaginaInicialFERA/>
        </section>

        <section className='guia-FERA'>
            <GuiadoFERA/>
        </section>

        <section className='contatosImportantes-FERA'>
            <ImportantContacts/>
        </section>

        <section className='mapa-FERA'>
            <MapaPage/>
        </section>

        <section className='dicasdeVeterano-FERA'>
            <DicasVeterano/>
        </section>

        <section className='guiaAcademico-FERA'>
            <GuiaFeras/>
        </section>

        <section className='perguntasFrequentes-FERA'>
            <FaqSection/>
        </section>

        <section className='carrossel-comunidades'>
            <AutoPlay />
        </section>
    </section>
  );
};

export default FeraPage;