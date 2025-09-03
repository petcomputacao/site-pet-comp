import React from 'react';
import { FaClipboardList, FaBookOpen, FaUserFriends, FaEnvelope } from 'react-icons/fa';
import './FaqSection.css';
import FAQForm from './FAQForm';
import { FaQ } from 'react-icons/fa6';

const FaqSection = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Perguntas Frequentes</h1>
      
      <div className="faq-list">
        {/* Item 1 */}
        <div className="faq-item">
          <div className="faq-header">
            <FaClipboardList className="faq-icon" />
            <h2 className="faq-question">1. Como me matricular nas disciplinas?</h2>
          </div>
          <p className="faq-answer">Acesse o SIGAA, vá em Portal do (Discente/Ensino/Matrícula Online/Realizar Matricula). Preste atenção nos pré-requisitos e horários.</p>
          <div className="divider"></div>
        </div>

        {/* Item 2 */}
        <div className="faq-item">
          <div className="faq-header">
            <FaBookOpen className="faq-icon" />
            <h2 className="faq-question">2. Onde encontro o material das aulas?</h2>
          </div>
          <p className="faq-answer">Os professores disponibilizam no SIGAA (Portal do Discente/Componente Curricular) ou em plataformas específicas como Google Classroom.</p>
          <div className="divider"></div>
        </div>

        {/* Item 3 */}
        <div className="faq-item">
          <div className="faq-header">
            <FaUserFriends className="faq-icon" />
            <h2 className="faq-question">3. Como participar dos grupos extracurriculares?</h2>
          </div>
          <p className="faq-answer">Fique atento aos processos seletivos do PET, monitoria, projetos de pesquisa e extensão divulgados no curson através do email institucional.</p>
          <div className="divider"></div>
        </div>

        {/* Item 4 */}
        <div className="faq-item">
          <div className="faq-header">
            <FaEnvelope className="faq-icon" />
            <h2 className="faq-question">4. Qual a importância do e-mail institucional?</h2>
          </div>
          <p className="faq-answer">É sua identidade acadêmica oficial. Usado para acessar sistemas, receber comunicações e validar sua vinculação à UFCG.</p>
        </div>
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