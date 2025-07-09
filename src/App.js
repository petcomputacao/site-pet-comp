import './App.css';

import AuroraCompleta       from './components/aurora-completa/AuroraCompleta';
import LogoPET              from './components/header-static/LogoPET';
import Navbar               from './components/header-static/Navbar';
import Footer               from './components/Footer';
import TextoPET             from './components/pagina-inicial/TextoPET';
import SecaoTutor           from './components/membros/SecaoTutor';
import SecaoMembrosAtivos   from './components/membros/SecaoMembrosAtivos';
import SecaoSobre           from './components/sobre/SecaoSobre';
import SliderImages         from './components/Slider';
import LogoPETpaginaInicial from './components/pagina-inicial/LogoPETpaginaInicial';
import Projetos from './components/projetos-desenvolvimento/Projetos';
import Producoes from './components/producoes/Producoes'


function App() {
  return (
    <div className="App">
      {/* Header da Pagina */}
      <div className="header">
          <LogoPET />
          <Navbar />
      </div>

      {/* Seções da página */}
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
          </section>

          {/* Animação Aurora */}
          <section className='section-aurora'>
            <AuroraCompleta/>
          </section>

          {/* Sobre */}
          <section id="Sobre" className="Sobre">
            <SecaoSobre />
          </section>

          {/* Projetos em desenvolvimento */}
          <div className='blockpage'>
            <section id="Projetos" className="Projetos">
              <Projetos />
            </section>
          </div>

          {/* Produções */}
          <div>
            <section id='Producoes' className='Producoes'>
              <Producoes />
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
      <footer className='Footer'>
        <Footer />
      </footer>
    </div>
  );
}


export default App;