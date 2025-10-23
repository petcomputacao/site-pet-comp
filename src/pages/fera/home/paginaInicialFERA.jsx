import './paginaInicialFERA.css'
import { Reveal } from '../../../components/reveal/Reveal.tsx';
import EmblaCarousel from './EmblaCarousel';

const PaginaInicialFERA = () => {
  return (
    <div className='paginaInicial-FERA-container'>
      {/* Carrossel como fundo - SEM conteúdo dentro */}
      <EmblaCarousel />
      
      {/* Conteúdo sobreposto - SEPARADO do carrossel */}
      <div className="paginaInicial-FERA-content">
        <Reveal width='100%'>
          <div className="paginaInicial-FERA-conteudo">
            <div className='titulo-FERA-container'>
              <h1 className="titulo-FERA-paginaInicial">Bem-vindos ao Guia do Fera</h1>
            </div>
          </div>
        </Reveal>
        
        <div className='paginaInicial-FERA-images'>
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo_pet_fundo_removido.png"}
              alt="Logo PET pagina inicial FERA"
            />
          </Reveal>
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"}
              alt="Logo ufcg pagina inicial FERA"
            />
          </Reveal>
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo-computacao.png"}
              alt="Logo computacao pagina inicial FERA"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicialFERA;