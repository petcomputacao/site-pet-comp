import './App.css';

import Aurora     from './components/pagina-inicial/Aurora';
import Logo       from './components/pagina-inicial/Logo';
import LogoUFCG   from './components/header-static/LogoPET';
import Navbar     from './components/header-static/Navbar';
import Footer     from './components/Footer';
import TextoPET   from './components/pagina-inicial/TextoPET';
import SecaoTutor from './components/members/SecaoTutor';

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
          <h1>PET COMPUTAÇÃO</h1>
        </section>
        {/* Projetos */}
        <section id="Projetos" className="Projetos">
          <h1>Projetos</h1>
        </section>
        {/* Pagina dedicada ao Tutor(a) */}
        <section id="Membros" className="PaginaTutor">
            <SecaoTutor />
        </section>
        {/* Pagina dedicada aos membros ativos */}
        <section className ="PaginaMembros">
          <h1>Pagina Membros</h1>
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