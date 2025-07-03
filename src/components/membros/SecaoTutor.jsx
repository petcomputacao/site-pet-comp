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
                    <div className="block">
                        <div className="foto-container">
                            <img
                                src={process.env.PUBLIC_URL + "/images/logo-pet.png"}
                                alt="Imagem tutor 1"
                                className="foto-tutor"
                            />
                        </div>
                    </div>

                    <div className="block">
                        <div className="foto-container">
                            <img
                                src={process.env.PUBLIC_URL + "/images/logo-pet.png"}
                                alt="Imagem tutor 2"
                                className="foto-tutor"
                            />
                        </div>
                    </div>

                    <div className="block-inferior">
                        <div className="foto-container">
                            <img
                                src={process.env.PUBLIC_URL + "/images/logo-pet.png"}
                                alt="Imagem tutor 3"
                                className="foto-tutor"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}