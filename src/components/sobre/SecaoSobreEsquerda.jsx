import "../../styles/sobre/SecaoSobreEsquerda.css"

export default function SobreEsquerda (){
    return(
        <div className="container-sobre-esquerda">
            <div className="container-esquerda">
                {/*titulo do texto */}
                <div className="block">
                    <div className="container-titulo-sobre">
                    <h1>SOBRE O PET</h1>
                </div>
                </div>
                {/*foto com o logo da ufcg*/}
                {/* <div className="block">
                    <div className="container-foto-esquerda">
                        <div className="container-foto">
                            <img src={process.env.PUBLIC_URL + "/images/logo-ufcg.png"} alt="imagem esquerda" />
                        </div>
                    </div>
                </div> */}
            </div>
            {/*corpo do texto*/}
            <div className="container-paragrafo-sobre">
                <div className="block">
                    <div className="container-ABOUT">
                        <p>
                            O PET - Programa de Educação Tutorial - foi criado e implantado em 1979, com o nome inicial de Programa Especial de Treinamento, pela CAPES. A partir do ano 2000, o programa passou a ser vinculado à Secretaria de Educação Superior - SESU/MEC.<br/>
                            Caracterizado pela atuação na tríade de uma universidade (a pesquisa, o ensino e a extensão), o Programa de Educação Tutorial é destinado a grupos de alunos que demonstrem potencial, interesse e habilidades destacadas em cursos de graduação das Instituições de Ensino Superior. Espera-se do aluno capacidade de leitura, pesquisa, iniciativa, crítica, trabalho em equipe, expressão oral e argumentação.
                        </p>
                    </div>
                </div>
            </div>
            {/*texto com hiper link para a pagina do PET no MEC */}
            <div className="block-inferior">
                <div className="botaoHiperLink">
                    <p className="texto-hiperlink">
                        Para informações mais detalhadas sobre o PET,{' '}
                    <a
                        href="https://portal.mec.gov.br/index.php?option=com_content&view=article&id=12223&Itemid=480"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-pet"
                    >
                    clique aqui!
                    </a>
                    </p>
                </div>
            </div>
        </div>
    )
}