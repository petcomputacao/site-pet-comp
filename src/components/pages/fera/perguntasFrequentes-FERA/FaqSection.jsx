import './FaqSection.css';
import FAQForm from './FAQForm';
import Accordion from '../../../static/Accordion'

const FaqSection = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Perguntas Frequentes</h1>

      <div className='accordeon-wrapper'>
        <Accordion />
      </div>

      <div className='faq-pet-fera-container'>
        <div className='faq-header-fera'>
          <h2 className='faq-title-fera'>
            Junte-se a nós! Sua voz é importante para o <span className="pet-azul">PET</span> continuar auxiliando os novos alunos da Computação.
          </h2>
          <p className='faq-subtitle-fera'>Compartilhe sua dúvida, orientação ou dificuldade com a gente!</p>
        </div>
        <div className='faq-form-wrapper-fera'>
            <FAQForm />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;