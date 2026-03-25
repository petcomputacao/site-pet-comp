import './home_section.css';
import { Reveal } from '../../../components/reveal/reveal.tsx';


export default function HomeSection () {
    return(
        <div className='paginaInicial-container'>          
            <div className='imagemFundo-container'>
                <img
                    src={process.env.PUBLIC_URL + "/images/logos/foto_home_pet.png"}
                    alt="Imagem fundo pagina inicial"
                    className="imagemFundo-paginaInicial"
                />
            </div>
            <div className='texto-overlay-container'>
                <div className='texto-box'>
                    <Reveal width="100%">
                        <h1 className='titulo-texto-paginaInicial'>PET Computação UFCG</h1>
                    </Reveal>
                    
                    <Reveal width="100%">
                        <p className='corpo-texto-paginaInicial'>
                            O PET Computação da Universidade Federal de Campina Grande (UFCG)
                            é um grupo de estudantes que desenvolve projetos de ensino, pesquisa e extensão
                            na área de computação.
                        </p>
                    </Reveal>
                    
                    <Reveal width="100%">
                        <div className='hiperlink-paginaInicial'>
                            <p className="texto-hiperlink-paginaInicial">
                                Para saber mais sobre o PET,{' '}
                                <a
                                    href="https://portal.mec.gov.br/pet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-paginaInicial"
                                >
                                acesse!
                                </a>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
