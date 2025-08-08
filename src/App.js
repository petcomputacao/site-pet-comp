import './App.css';

import Header from './components/static/Header/Header';
import HomePet from './components/pages/HomePage/HomePET';
import Vertentes from './components/pages/ProjectsLines/VertentesProjects';
import SecaoTutor from './components/pages/MemberPage/TutorPage/SecaoTutor';
import SecaoSobre from './components/pages/About/SecaoSobre';
import Producoes from './components/pages/InProgressProjects/Producoes';
import MembrosAtivos from './components/pages/MemberPage/MembrosAtivosPage/MembrosAtivos';
import Footer from './components/static/Footer/Footer';

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
            <section className="Projetos">
              <Vertentes/>
            
            </section>

          {/* Produções */}
          <div>
            <section id="Projetos" className='Producoes'>
              <Producoes />
            </section>
          </div>
          {/* Pagina dedicada ao Tutor(a) */}
          <div className='blockpage'>
            <section className="PaginaTutor">
               <SecaoTutor/>
            </section>
          </div>

          {/* Pagina dedicada aos membros ativos */}
          <div className='blockpage'>
            <section id="Membros" className ="PaginaMembros">
              <MembrosAtivos />
            </section>
          </div>
      </main>
      
      {/* Rodapé da pagina */}
      <footer className='Footer'>
        <div className='Footer__logo-computacao-ufcg'>
          <img src={process.env.PUBLIC_URL + "/images/logos/computacaoufcg_sem_fundo.png"} alt='logo-computacao-ufcg' className='logo-computacao-ufcg'/>
          <img src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"} alt="logo-ufcg" className='logo-ufcg' />
        </div>
        <Footer />
      </footer>
    </div>
  );
}


export default App;