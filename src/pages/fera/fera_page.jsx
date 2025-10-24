import './fera_page.css';

import PaginaInicialFERA from './home/home_fera';
import GuiadoFERA        from './guia/guia_fera';
import CampusMaps        from './mapa/campus_maps';
import ImportantContacts from './contatos-importantes/important_contacts';
import FaqSection        from './faq/faq_section';
import DicasVeterano     from './dicas-veterano/dicas_veterano';
import GuiaFeras         from './guia-disciplinas/guia_disciplinas';
import AutoPlay          from '../../components/autoplay/autoplay';


const FeraPage = () => {
  return (
    <section className='ContainerPAGINAFERA'>
        <section id='paginaInicia-FERA' className='paginaincial-FERA'>
            <PaginaInicialFERA />
        </section>

        <section className='guia-FERA'>
            <GuiadoFERA />
        </section>

        <section className='contatosImportantes-FERA'>
            <ImportantContacts />
        </section>

        <section className='mapa-FERA'>
            <CampusMaps />
        </section>

        <section className='dicasdeVeterano-FERA'>
            <DicasVeterano />
        </section>

        <section className='guiaAcademico-FERA'>
            <GuiaFeras />
        </section>

        <section className='perguntasFrequentes-FERA'>
            <FaqSection />
        </section>

        <section className='carrossel-comunidades'>
            <AutoPlay />
        </section>
    </section>
  );
};

export default FeraPage;