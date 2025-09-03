import './GuiadoFERA.css';
import { FiClock, FiWifi, FiMapPin } from 'react-icons/fi'; // importa os ícones
import { Reveal } from '../../../static/Reveal.tsx';

const GuiadoFERA = () => {
  return (
    <div className='guia-FERA-container'>

      {/* Título e descrição */}
      <div className='titulo-descricao-guia-FERA-container'>
        <div className='titulo-guia-FERA'>
          <h1>
            GUIA DO <span className='destaque-FERA'>FERA</span>
          </h1>
        </div>
        <div className='descricao-guia-FERA'>
          <p>
            Tudo que você precisa saber para navegar pelo campus da UFCG e aproveitar ao máximo sua experiência universitária desde o primeiro dia!
          </p>
        </div>
      </div>

      {/* Primeiros passos */}
      <div className='box-primeirospassos-guia-FERA'>
        <h2 className='titulo-primeiros-passos'>Primeiros Passos</h2>

        <div className='cards-passos'>

          {/* Card 1 */}
          <div className='card-passo'>
            <div className='icone-card'><FiClock /></div>
            <h3 className='titulo-card'>Gestão de Tempo</h3>
            <p className='texto-card'>
              Planeje-se para chegar 15 minutos antes das aulas. O campus é extenso e você pode se perder no início.
            </p>
          </div>

          {/* Card 2 */}
          <div className='card-passo'>
            <div className='icone-card'><FiWifi /></div>
            <h3 className='titulo-card'>Internet no Campus</h3>
            <p className='texto-card'>
              Configure a rede WiFi da UFCG. Use sua matrícula e senha do SIGAA para acessar a internet gratuita.
            </p>
          </div>

          {/* Card 3 */}
          <div className='card-passo'>
            <div className='icone-card'><FiMapPin /></div>
            <h3 className='titulo-card'>Orientação no Campus</h3>
            <p className='texto-card'>
              O campus é grande! Use os primeiros dias para explorar e se familiarizar com os caminhos entre os blocos.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuiadoFERA;
