import './App.css';

import Aurora     from './components/pagina-inicial/Aurora';
import LogoPET   from './components/header-static/LogoPET';
import Navbar     from './components/header-static/Navbar';
import Footer     from './components/Footer';
import TextoPET   from './components/pagina-inicial/TextoPET';
import SecaoTutor         from './components/membros/SecaoTutor';
import SecaoMembrosAtivos from './components/membros/SecaoMembrosAtivos';
import SecaoSobre         from './components/sobre/SecaoSobre';
import AutoPlay from './components/projectspage/InfiteAutoplay';
import TextoProjects from './components/projectspage/TextoProjects';
import SliderImages from './components/pagina-inicial/Slider';
import LogoPETpaginaInicial from './components/pagina-inicial/LogoPETpaginaInicial';

function App() {
  return (
    <div className="App">
      {/* Header da Pagina */}
      <div className="header">
          <LogoPET />
          <Navbar />
      </div>

      {/* Sessão das "partes" da pagina */}
      <main>
        {/* Pagina Inicial */}
          <section id="paginaInicial" className="paginaInicial">
            <div className="content-wrapper"> 
              <section className='esquerda-pagina-inicial'>
                <TextoPET />
              </section>
              <section className='direita-pagina-inicial'>
                <div className='slider-Section'>
                  <SliderImages/>
                </div>
                <div className='logo-Section'>
                    <LogoPETpaginaInicial />
                </div>
              </section>
            </div>
            <Aurora/>
          </section>

        {/* Sobre */}
          <section id="Sobre" className="Sobre">
            <SecaoSobre />
          </section>

        {/* Projetos */}
        <div className='blockpage'>
          <section id="Projetos" className="Projetos">
            <div className='textosProjects'>
              <TextoProjects />
            </div>
            <div className="content-projects"> 
              <AutoPlay/>
            </div>
          </section>
        </div>

        {/* Pagina dedicada ao Tutor(a) */}
        <div className='blockpage'>
          <section id="Tutor" className="PaginaTutor">
            <SecaoTutor />
          </section>
        </div>

        {/* Pagina dedicada aos membros ativos */}
        <div className='blockpage'>
        <section id="Membros" className ="PaginaMembros">
          <SecaoMembrosAtivos />
        </section>
        </div>
        
    </main>
    {/* Rodapé da pagina */}
    <footer>
      <Footer />
    </footer>

    </div>
  );
}


export default App;