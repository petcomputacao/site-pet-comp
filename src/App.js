import './App.css';

import Header from './components/static/Header/Header';
import SecaoSobre from './components/pages/About/SecaoSobre';

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
          <section id="paginaInicial" className="paginaInicial">
          </section>

          {/* Sobre */}
          <section id="Sobre" className="Sobre">
            <SecaoSobre />
          </section>

          {/* Projetos em desenvolvimento */}
          <div className='blockpage'>
            <section id="Projetos" className="Projetos">
            </section>
          </div>

          {/* Produções */}
          <div>
            <section id='Producoes' className='Producoes'>
            </section>
          </div>
          {/* Pagina dedicada ao Tutor(a) */}
          <div className='blockpage'>
            <section id="Tutor" className="PaginaTutor">
            </section>
          </div>

          {/* Pagina dedicada aos membros ativos */}
          <div className='blockpage'>
            <section id="Membros" className ="PaginaMembros">
            </section>
          </div>
      </main>
      
      {/* Rodapé da pagina */}
      <footer className='Footer'>

      </footer>
    </div>
  );
}


export default App;