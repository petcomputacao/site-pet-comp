import '../../styles/pagina-inicial/TextoPET.css';

function TextoPET() {

   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="texto-PET">
        <div className='titulo-texto'>
            <p>
            O que é o PET Computação?
            </p>
        </div>
        <div className='corpo-texto'>
            <p>
            O PET Computação é um grupo de alunos de graduação que desenvolve atividades integradas de ensino, pesquisa e extensão. 
            Voltado para a formação acadêmica completa, o grupo busca fortalecer a qualidade do curso de Ciência da Computação e incentivar a entrada de novos talentos na área, promovendo a computação desde o ensino médio até a universidade. 
            </p>
        </div>
        <div className='localBotao'>
          <button 
            className="botaoSaibaMais" 
            onClick={() => scrollToSection('Sobre')}
          >
            Saiba Mais!
          </button>
        </div>
    </div>
  );
}

export default TextoPET;