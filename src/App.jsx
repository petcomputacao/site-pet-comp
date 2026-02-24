import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/static/header/header.jsx';
import PetPage from './pages/pet/pet_page.jsx';
import FeraPage from './pages/fera/fera_page';
import Footer from './components/static/footer/footer.jsx';
import ComputacaoNasEscolas from "./pages/computacao-nas-escolas/ComputacaoNasEscolas.jsx";


function App() {
  return (
    <Router basename='site-pet-comp'>
      <div className="App">
        <header className="header">
          <Header />
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<PetPage />}
            />

            <Route
              path="/fera"
              element={<FeraPage />}
            />

            <Route
              path="/computacao-nas-escolas"
              element={<ComputacaoNasEscolas />}
            />
          </Routes>
        </main>
        <footer className='footer'>
          <div className='footer__logo-computacao-ufcg'>
            <img src={process.env.PUBLIC_URL + "/images/logos/computacaoufcg_sem_fundo.png"} alt='logo-computacao-ufcg' className='logo-computacao-ufcg' />
            <img src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"} alt="logo-ufcg" className='logo-ufcg' />
          </div>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;