import './App.css';
import Aurora from './Aurora';
import Navbar from './Navbar';
import Logo from './Logo';
import Logo_UFCG from './Logo_UFCG';


function App() {
  return (
    <div className="App">
      <section className="paginaInicial">
        <div className="header">
          <div className="logoUFCG">
            <Logo_UFCG/>
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