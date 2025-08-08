import './HomePET.css';
import { Reveal } from '../../static/Transicao/Transicaocontainer.tsx';

function HomePet(){
    return(
        <div className='paginaInicial-container'>          
            <div className='imagemFundo-container'>
                <img
                    src={process.env.PUBLIC_URL + "/images/logos/logo-pet.png"}
                    alt="Imagem fundo pagina inicial"
                    className="imagemFundo-paginaInicial"
                />
            </div>
            <div className='texto-overlay-container'>
                <div className='texto-box'>
                    <Reveal width="100%">
                        <h1 className='titulo-texto-paginaInicial'>Você já conhece o PET Computação?</h1>
                    </Reveal>
                    
                    <Reveal width="100%">
                        <div className='corpo-texto-paginaInicial'>
                            <p>Somos um grupo de estudantes de Ciência da Computação da UFCG que, junto ao tutor, desenvolve projetos de ensino, pesquisa e extensão para transformar o nosso ambiente acadêmico e contribuir com a sociedade.</p>
                        </div>
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

export default HomePet;