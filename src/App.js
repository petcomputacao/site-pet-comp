import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './app.css';
import Header from './components/static/header/Header';
import SecaoSobre from './components/pages/sobre/SecaoSobre';
import Producoes from './components/pages/producoes/Producoes';
import MembrosAtivos from './components/pages/membros/MembrosAtivosPage/MembrosAtivos';
import Footer from './components/static/footer/Footer';
import HomePet from './components/pages/home/HomePET';
import Vertentes from './components/pages/linhas/VertentesProjects';
import SecaoTutor from './components/pages/membros/TutorPage/SecaoTutor';
import FeraPage from './components/pages/fera/FERApage';

function App() {
  return (
    <Router>
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
                  <HomePet/>
                </section>

                <section  className="Sobre">
                  <SecaoSobre />
                </section>

                <section className="Projetos">
                  <Vertentes/>
                </section>

                <div>
                  <section id="Projetos" className='Producoes'>
                    <Producoes />
                  </section>
                </div>

                <div className='blockpage'>
                  <section className="PaginaTutor">
                    <SecaoTutor/>
                  </section>
                </div>

                <div className='blockpage'>
                  <section id="Membros" className="PaginaMembros">
                    <MembrosAtivos />
                  </section>
                </div>
              </>
            } />

            {/* Rota da Página Fera */}
            <Route path="/fera" element={<FeraPage />} />
          </Routes>
        </main>

        <footer className='Footer'>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;