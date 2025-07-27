import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/static/Header/Header';
import SecaoSobre from './components/pages/About/SecaoSobre';
import Producoes from './components/pages/InProgressProjects/Producoes';
import MembrosAtivos from './components/pages/MemberPage/MembrosAtivosPage/MembrosAtivos';
import Footer from './components/static/Footer/Footer';
import HomePet from './components/pages/HomePage/HomePET';
import Vertentes from './components/pages/ProjectsLines/VertentesProjects';
import SecaoTutor from './components/pages/MemberPage/TutorPage/SecaoTutor';
import FeraPage from './components/pages/PaginaFERA/FERApage';

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