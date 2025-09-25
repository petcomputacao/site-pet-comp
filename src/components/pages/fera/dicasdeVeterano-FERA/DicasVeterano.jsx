import './DicasVeterano.css';
import { FaEnvelope, FaWhatsapp, FaBook, FaLaptop } from 'react-icons/fa';


export default function DicasVeterano() {
  return (
    <div className="dicas-container">
      <div className="dicas-header">
          <h1>Dicas de <span className="veterano-text">Veterano</span></h1>
          <p className="dicas-intro">
            Informações essenciais para te ajudar a navegar pela vida acadêmica na UFCG.
            Desde o básico até dicas avançadas de quem já passou por isso.
          </p>
      </div>

      <div className="dicas-content">
          <h2>Dicas Essenciais</h2>

        <div className="dicas-grid">
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
        </div>
      </div>
    </div>
  );
};
