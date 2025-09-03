import "./tutor.css"
import { Reveal } from '../../../static/Transicaocontainer.tsx';


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
    );
}