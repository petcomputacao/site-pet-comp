import './pet_page.css';

import HomeSection        from './home/home_section.jsx';
import SobreSection       from './sobre/sobre_section.jsx';
import LinhasSection      from './linhas/linhas_section.jsx';
import PetCompAcaoSection from './pet-comp-acao/pet_comp_acao_section.jsx';
import TutorSection       from './membros/tutor/tutor_section.jsx';
import MembrosSection     from './membros/membros-ativos/membros_section.jsx';

export default function PetPage() {
    return (
        <>
            <section id="PaginaInicial-PET" className="paginaInicial">
                    <HomeSection />
            </section>

            <section className="Sobre">
                <SobreSection />
            </section>

            <section className="Projetos">
                <LinhasSection />
            </section>

            <section id="Projetos" className='Producoes'>
                <PetCompAcaoSection />
            </section>

            <section className="PaginaTutor">
                <TutorSection/>
            </section>

            <section id="Membros" className="PaginaMembros">
                <MembrosSection />
            </section>
        </>
    );
}