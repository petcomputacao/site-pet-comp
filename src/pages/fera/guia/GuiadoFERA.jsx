import './GuiadoFERA.css';
import { FiClock, FiWifi, FiMapPin } from 'react-icons/fi';
import { Reveal } from '../../../components/reveal/Reveal.tsx'

const GuiadoFERA = () => {
  return (
    <div className='guia-FERA-container'>

      {/* Título e descrição */}
      <Reveal>
      <div className='titulo-descricao-guia-FERA-container'>
        <div className='descricao-guia-FERA'>
          <p>
            Tudo que você precisa saber para navegar pelo campus da UFCG e aproveitar ao máximo sua experiência universitária desde o primeiro dia!
          </p>
        </div>
      </div>
      </Reveal>

      {/* Primeiros passos */}
      <div className='box-primeirospassos-guia-FERA'>
        <Reveal>
        <h2 className='titulo-primeiros-passos'>Primeiros Passos</h2>
        </Reveal>

        <div className='cards-passos'>

          {/* Card 1 */}
          <div className='card-passo'>
            <Reveal>
            <div className='icone-card'><FiClock /></div>
            <h3 className='titulo-card'>Gestão de Tempo</h3>
            <p className='texto-card'>
              Planeje-se para chegar 15 minutos antes das aulas. O campus é extenso e você pode se perder no início.
            </p>
            </Reveal>
          </div>

          {/* Card 2 */}
          <div className='card-passo'>
            <Reveal>
            <div className='icone-card'><FiWifi /></div>
            <h3 className='titulo-card'>Internet no Campus</h3>
            <p className='texto-card'>
              Configure a rede WiFi da UFCG. Use sua matrícula e senha do SIGAA para acessar a internet gratuita.
            </p>
            </Reveal>
          </div>

          {/* Card 3 */}
          <div className='card-passo'>
            <Reveal>
            <div className='icone-card'><FiMapPin /></div>
            <h3 className='titulo-card'>Orientação no Campus</h3>
            <p className='texto-card'>
              O campus é grande! Use os primeiros dias para explorar e se familiarizar com os caminhos entre os blocos.
            </p>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuiadoFERA;
