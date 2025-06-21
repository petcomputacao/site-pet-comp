import './styles/App.css';
import Aurora from './components/Aurora';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import LogoUFCG from './components/LogoUFCG';


function App() {
  return (
    <div className="App">
      <section className="paginaInicial">
        <div className="header">
          <div className="logoUFCG">
            <LogoUFCG/>
          </div>
          <Navbar/>
      </div>
        <div className="ajeitaLogo">
          <Logo/>
        </div>
        <Aurora/>
      </section>

      <section className="About">
        <h1>PET COMPUTAÇÃO</h1>
      </section>

    </div>
  );
}


export default App;