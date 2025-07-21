import './App.css';

import Header from './components/static/Header/Header';
import HomePet from './components/pages/HomePage/HomePET';
import Vertentes from './components/pages/ProjectsLines/VertentesProjects';
import SecaoTutor from './components/pages/MemberPage/TutorPage/SecaoTutor';
import SecaoSobre from './components/pages/About/SecaoSobre';
import Producoes from './components/pages/InProgressProjects/Producoes';

function App() {
  return (
    <div className="App">
      {/* Header da Pagina */}
      <div className="header">
          <Header />
      </div>

      {/* Seções da página */}
      <main>
          {/* Pagina Inicial */}
          <section id="PaginaInicial" className="paginaInicial">
            <HomePet/>
          </section>

          {/* Sobre */}
          <section id="Sobre" className="Sobre">
            <SecaoSobre />
          </section>

          {/* Projetos em desenvolvimento */}
            <section id="Projetos" className="Projetos">
              <Vertentes/>
            
            </section>

          {/* Produções */}
          <div>
            <section id='Producoes' className='Producoes'>
              <Producoes />
            </section>
          </div>
          {/* Pagina dedicada ao Tutor(a) */}
            <section id="Membros" className="PaginaTutor">
              <SecaoTutor/>
            </section>

          {/* Pagina dedicada aos membros ativos */}
            <section className ="PaginaMembros">
            </section>
      </main>
      
      {/* Rodapé da pagina */}
      <footer className='Footer'>
      </footer>
    </div>
  );
}


export default App;