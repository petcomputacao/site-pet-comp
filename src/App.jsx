import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header           from './components/static/header/Header';
import SecaoHome        from './components/pages/home/SecaoHome'
import SecaoSobre       from './components/pages/sobre/SecaoSobre';
import SecaoLinhas      from './components/pages/linhas/SecaoLinhas';
import SecaoPetCompAcao from './components/pages/pet-comp-acao/SecaoPetCompAcao';
import SecaoTutor       from './components/pages/membros/tutor/SecaoTutor'
import SecaoMembros     from './components/pages/membros/membros-ativos/SecaoMembros'
import Footer           from './components/static/footer/Footer';
import FeraPage         from './components/pages/fera/FERApage';


function App() {
  return (
    <Router basename='site-pet-comp'>
      <div className="App">
        <div className="header">
          <Header />
        </div>

        <main>
          <Routes>
            {/* Rota da Página Principal */}
            <Route path="/" element={
              <>
                <section id="PaginaInicial-PET" className="paginaInicial">
                  <SecaoHome />
                </section>

                <section className="Sobre">
                  <SecaoSobre />
                </section>

                <section className="Projetos">
                  <SecaoLinhas />
                </section>

                <div>
                  <section id="Projetos" className='Producoes'>
                    <SecaoPetCompAcao />
                  </section>
                </div>

                <div className='blockpage'>
                  <section className="PaginaTutor">
                    <SecaoTutor/>
                  </section>
                </div>

                <div className='blockpage'>
                  <section id="Membros" className="PaginaMembros">
                    <SecaoMembros />
                  </section>
                </div>
              </>
            } />

            {/* Rota da Página Fera */}
            <Route path="/fera" element={<FeraPage />} />
          </Routes>
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
    </Router>
  );
}

export default App;