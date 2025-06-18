import './App.css';
import Aurora from './Aurora';
import Navbar from './Navbar';
import Logo from './Logo';
import Logo_UFCG from './Logo_UFCG';


function App() {
  return (
    <div className="App">
      <Aurora/>
      <Navbar/>
      <Logo/>
      <Logo_UFCG/>
      <div className="content">
      </div>
    </div>
  );
}


export default App;