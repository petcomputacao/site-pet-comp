import './paginaInicialFERA.css'

const PaginaInicialFERA = () => {
  return (
    <div className='paginaInicial-FERA-container'>
        <div className="paginaInicial-FERA-conteudo">
            <div className='titulo-FERA-container'>
                <h1 className="titulo-FERA-paginaInicial">Bem vindo a Página do Fera - Computação!</h1>
            </div>
{/*             
            <div className='box-paginaInicial-container'>
                <div className='titulo-paginaInicial-FERA-container'>
                    <div className='titulo-paginaInicial-FERA'>
                        <h1>
                            Informações sobre o Curso
                        </h1>
                    </div>
                </div>

                <div className='sobre-paginaInicial-FERA-container'>
                    <div className='sobre-paginaInicial-FERA-titulo-container'>
                        <div className='sobre-paginaInicial-FERA-titulo'>
                            <h1>
                                Sobre o curso
                            </h1>
                        </div>
                    </div>
                    <div className='sobre-paginaInicial-FERA-corpo-container'>
                        <div className='sobre-paginaInicial-FERA-corpo'>
                            <h1>
                                O curso de Ciência da Computação da UFCG é reconhecido como um dos melhores do Brasil. Com uma formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e inteligência artificial, os alunos são preparados para os desafios do mercado de trabalho e da pesquisa acadêmica.
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='sobre-paginaInicial-FERA-container'>
                    <div className='sobre-paginaInicial-FERA-titulo-container'>
                        <div className='sobre-paginaInicial-FERA-titulo'>
                            <h1>
                                Estrutura Curricular
                            </h1>
                        </div>
                    </div>
                    <div className='sobre-paginaInicial-FERA-corpo-container'>
                        <div className='sobre-paginaInicial-FERA-corpo'>
                            <h1>
                                O curso tem duração de,aproximadamente, 4 anos (9 períodos) e está estruturado em disciplinas obrigatórias e optativas. Os primeiros períodos são focados em fundamentos da computação e matemática, enquanto os períodos finais permitem maior especialização em áreas de interesse.                        </h1>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        
        <div className='paginaInicial-FERA-images'>
            <img
                src={process.env.PUBLIC_URL + "/images/logos/logo-pet.png"}
                alt="Logo PET pagina inicial FERA"
            />
            <img
                src={process.env.PUBLIC_URL + "/images/logos/logo-ufcg.png"}
                alt="Logo ufcg pagina inicial FERA"
            />
            <img
                src={process.env.PUBLIC_URL + "/images/logos/logo-computacao.png"}
                alt="Logo computacao pagina inicial FERA"
          />
        </div>
    </div>
  );
};

export default PaginaInicialFERA;
