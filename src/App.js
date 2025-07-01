import './App.css';

import Aurora     from './components/pagina-inicial/Aurora';
import Logo       from './components/pagina-inicial/Logo';
import LogoUFCG   from './components/header-static/LogoPET';
import Navbar     from './components/header-static/Navbar';
import Footer     from './components/Footer';
import TextoPET   from './components/pagina-inicial/TextoPET';
import SecaoTutor         from './components/membros/SecaoTutor';
import SecaoMembrosAtivos from './components/membros/SecaoMembrosAtivos';
import SecaoSobre         from './components/sobre/SecaoSobre';
import AutoPlay from './components/projectspage/InfiteAutoplay';
import TextoProjects from './components/projectspage/TextoProjects';

function App() {
  return (
    <div className="App">
      {/* Header da Pagina */}
      <div className="header">
          <LogoUFCG />
          <Navbar />
      </div>

      {/* Sessão das "partes" da pagina */}
      <main>
        {/* Pagina Inicial */}
        <section id="paginaInicial" className="paginaInicial">
          <div className="content-wrapper"> 
            <TextoPET />
            <Logo/>
          </div>
          <Aurora/>
        </section>

        {/* Sobre */}
        <section id="Sobre" className="Sobre">
          <SecaoSobre />
        </section>

        {/* Projetos */}
        <section id="Projetos" className="Projetos">

          <div className='textosProjects'>
            <TextoProjects />
          </div>

          <div className="content-projects"> 
             <AutoPlay/>
          </div>
        </section>

        {/* Pagina dedicada ao Tutor(a) */}
        <section id="Tutor" className="PaginaTutor">
          <SecaoTutor />
        </section>
        {/* Pagina dedicada aos membros ativos */}
        <section id="Membros" className ="PaginaMembros">
          <SecaoMembrosAtivos />
        </section>
    </main>
    {/* Rodapé da pagina */}
    <footer>
      <Footer />
    </footer>

    </div>
  );
}


export default App;