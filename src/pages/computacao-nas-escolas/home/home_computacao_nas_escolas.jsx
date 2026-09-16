import './home_CNE.css'
import { Reveal } from '../../../components/reveal/reveal.tsx';
import HeroBackground from './background_img.jsx';

const PaginaInicialCNE = () => {
  return (
    <div className='paginaInicial-CNE-container'>
      <HeroBackground />
      
      {/* Conteúdo sobreposto - SEPARADO do carrossel */}
      <div className="paginaInicial-CNE-content">
        <Reveal width='100%'>
          <div className="paginaInicial-CNE-conteudo">
            <div className='titulo-CNE-container'>
              <h1 className="titulo-CNE-paginaInicial">Computação nas Escolas: Promovendo a cidadania digital</h1>
            </div>
          </div>
        </Reveal>
        
        <div className='paginaInicial-CNE-images'>
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo_pet_fundo_removido.png"}
              alt="Logo PET pagina inicial CNE"
            />
          </Reveal>
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"}
              alt="Logo ufcg pagina inicial CNE"
            />
          </Reveal>
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo-computacao.png"}
              alt="Logo computacao pagina inicial CNE"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicialCNE;