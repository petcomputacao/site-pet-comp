<<<<<<< HEAD
import "./SecaoTutor.css"
import { Reveal } from '../../../static/Transicao/Transicaocontainer.tsx';


export default function SecaoTutor() {
    return (
        <div className="secao-tutor">
            <div className="parteEsquerda-tutor-container">
                <Reveal width="100%">
                <div className="nome-tutor-container">
                    <div className="nome-tutor">
                        <p>
                            Lívia Maria Rodrigues Sampaio Campos
                        </p>
                    </div>
                </div>
                </Reveal>
                <Reveal width="100%">
                <div className="descricao-tutor-container">
                    <div className="descricao-tutor">
                        <p>
                        A professora Livia possui doutorado em <strong>Engenharia Elétrica</strong> (UFCG, 2007) além de ser
                        graduada e mestre em <strong>Ciência da Computação</strong> pela UFPB/Campina Grande.
                        Atua principalmente em projetos relacionados a
                        <strong> IoT aplicada à sustentabilidade</strong> no {" "}
                        <a
                            href="https://www.lsd.ufcg.edu.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontWeight: "bold", color: "#274c9eff", textDecoration: "underline" }}
                        >
                            Laboratório de Sistemas Distribuídos
                        </a>
                        . Além disso, também pesquisa sobre a <strong>educação em computação</strong> e o {" "}
                        <strong>pensamento computacional</strong>.
                        Tendo como principal interesse  iniciativas ligadas à <strong>participação feminina</strong> nas ciências exatas.
                        </p>
                    </div>
                </div>
                </Reveal>
            </div>

            <div className="parteDireita-tutor-container">
                <Reveal width="100%">
                <div className="fotoTutor-container">
                    <div className="fotoTutor">
                        <img 
                        src={process.env.PUBLIC_URL + "/images/membros/livia.jpeg"} 
                        alt="Foto Tutor" 
                        className="foto-tutor-image"
                        />
                    </div>
                </div>
                </Reveal>
                <Reveal width="100%">
                <div className="hiperlinkTutor-container">
                    <div className="hiperlinkTutor">
                        <p className="texto-hiperlink-professora">
                            Para conhecer mais sobre seu trabalho,{' '}
                            <a
                                href="https://sites.google.com/computacao.ufcg.edu.br/livia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-professora"
                            >
                            acesse!
                            </a>
                        </p>
                    </div>
                </div>
                </Reveal>
            </div>
        </div>
=======
import "../../styles/membros/SecaoTutor.css"

export default function SecaoTutor() {
    return (
        <section className="secao-tutor">
            {/*sessão responsavel pelo LADO ESQUERDO da pagina (foto, nome, informação)*/}
            <div className="foto-nome-container">
                <div className="block">
                    <div className="nomeTutora-container">
                        <div className="name-box">
                            <p>
                                Lívia Maria Rodrigues Sampaio Campos
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="foto-perfil-tutora-container">
                        <img src={process.env.PUBLIC_URL + "/images/livia.jpeg"} 
                        alt="Foto Tutor" 
                        className="foto-tutor-image"/>
                    </div>
                </div>

                <div className="block-inferior">
                    <div className="logos-tutora-container">
                        <div className="picture1">
                            <img
                                src={process.env.PUBLIC_URL + "/images/logo-pet.png"}
                                alt="Imagem Tutor"
                                className="picture-description"
                            />
                        </div>
                        <div className="picture2">
                            <img
                                src={process.env.PUBLIC_URL + "/images/logo-ufcg.png"}
                                alt="Imagem tutor"
                                className="picture-description"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/*sessão responsavel pelo MEIO da pagina (texto sobre a carreira e link)*/}
            <div className="carreira-descricao-links">
                <div className="block">
                    <div className="titulo-container">
                        <div className="titulo-descricao-tutora">
                            <p>
                                Tutora do PET Computação
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="block">
                    <div className="corpo-texto-descricao-container">
                        <div className="corpo-texto-descricao">
                            <p>
                                Possui doutorado em Engenharia Elétrica pela Universidade Federal de Campina Grande (2007), com pesquisa em sistemas distribuídos. Graduação em Bacharelado em Ciência da Computação (1998) e Mestrado em Informática (2000), ambos pela Universidade Federal da Paraíba/C. Grande. Tem experiência na área de Ciência da Computação, com ênfase em Sistemas Distribuídos, atuando principalmente nos seguintes temas: IoT aplicada, com ênfase em gerência inteligente e eficiente de recursos (água, energia, etc.) para sustentabilidade, além de educação em computação, estudando aspectos práticos e teóricos de pensamento computacional aplicado. Também é uma área de interesse aspectos relacionados à participação de mulheres nas exatas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block-inferior">
                    <div className="hiperLink-professora-container">
                        <div className="botaoHiperLink-professora">
                            <p className="texto-hiperlink-professora">
                                Para conhecer mais sobre seu trabalho,{' '}
                                <a
                                    href="https://sites.google.com/computacao.ufcg.edu.br/livia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-professora"
                                >
                                acesse!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*sessão responsvel pelo LADO ESQUERDO pagina*/}
            <div className="fotos-tutora">
                <div className="fotos-tutora-container">
                    <div className="block-celular">
                        <div className="foto-container">
                            <img
                                src={process.env.PUBLIC_URL + "/images/exemplos/exemplo.jpg"}
                                alt="Imagem tutor 1"
                                className="foto-tutor"
                            />
                        </div>
                    </div>

                    <div className="block-celular">
                        <div className="foto-container">
                            <img
                                src={process.env.PUBLIC_URL + "/images/exemplos/exemplo.jpg"}
                                alt="Imagem tutor 2"
                                className="foto-tutor"
                            />
                        </div>
                    </div>

                    <div className="block-inferior">
                        <div className="foto-container">
                            <img
                                src={process.env.PUBLIC_URL + "/images/exemplos/exemplo.jpg"}
                                alt="Imagem tutor 3"
                                className="foto-tutor"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
>>>>>>> v3.0/feat/footer
    );
}