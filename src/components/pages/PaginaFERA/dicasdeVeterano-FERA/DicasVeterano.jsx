import React from 'react';
import { FaEnvelope, FaWhatsapp, FaBook, FaLaptop } from 'react-icons/fa';
import './DicasVeterano.css';
import { Reveal } from '../../../static/Transicao/Transicaocontainer.tsx';


const DicasVeterano = () => {
  return (
    <div className="dicas-container">
      <div className="dicas-header">
        <Reveal>
        <h1>Dicas de <span className="veterano-text">Veterano</span></h1>
        </Reveal>
        <Reveal>
        <p className="dicas-intro">
          Informações essenciais para te ajudar a navegar pela vida acadêmica na UFCG. 
          Desde o básico até dicas avançadas de quem já passou por isso.
        </p>
        </Reveal>
      </div>

      <div className="dicas-content">
        <Reveal>
        <h2>Dicas Essenciais</h2>
        </Reveal>
        
        <div className="dicas-grid">
          <Reveal>
          <div className="dica-card">
            <div className="dica-icon">
              <FaEnvelope />
            </div>
            <h3>E-mail Institucional</h3>
            <p>
              Use sempre seu e-mail institucional (@ccc.ufcg.edu.br) para comunicações 
              acadêmicas e acesso aos sistemas da universidade.
            </p>
          </div>
          </Reveal>

          <Reveal>
          <div className="dica-card">
            <div className="dica-icon">
              <FaWhatsapp />
            </div>
            <h3>Grupos de WhatsApp</h3>
            <p>
              Participe dos grupos de sua turma e do curso para ficar por dentro de 
              avisos importantes e se conectar com os colegas.
            </p>
          </div>
          </Reveal>
          <Reveal>
          <div className="dica-card">
            <div className="dica-icon">
              <FaBook />
            </div>
            <h3>Locais de Estudo</h3>
            <p>
              Conheça a biblioteca central, salas de estudo do LCC e outros 
              espaços para estudar no campus.
            </p>
          </div>
          </Reveal>
          <Reveal>
          <div className="dica-card">
            <div className="dica-icon">
              <FaLaptop />
            </div>
            <h3>Como acessar o SIGAA</h3>
            <p>
              Sistema acadêmico da UFCG onde você consulta notas, se matricula 
              em disciplinas e acessa informações do curso.
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default DicasVeterano;