import './styles/App.css';
import Aurora from './components/Aurora';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import LogoUFCG from './components/LogoUFCG';


function App() {
  return (
    <div className="App">
      <Aurora/>
      <Navbar/>
      <Logo/>
      <LogoUFCG/>
      <div className="content">
      </div>
    </div>
  );
}


export default App;