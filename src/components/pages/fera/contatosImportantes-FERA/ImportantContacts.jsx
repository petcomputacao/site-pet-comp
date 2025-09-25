import './ImportantContacts.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


export default function ImportantContacts() {
  return (
    <div className="contacts-container">
        <h1>Contatos Importantes</h1>


      <div className="contacts-grid">
          <div className="contact-card">
            <h2>Coordenação do Curso</h2>
            <p>Prof. Dr. Coordenador</p>
            <p className="contact-info">
              <FaEnvelope className="icon" />
              coordenacao.cc@ccc.ufcg.edu.br
            </p>
            <p className="contact-info">
              <FaPhone className="icon" />
              (83) 2101-1234
            </p>
          </div>
          <div className="contact-card">
            <h2>Secretaria Acadêmica</h2>
            <p>Secretaria CCC</p>
            <p className="contact-info">
              <FaEnvelope className="icon" />
              secretaria@ccc.ufcg.edu.br
            </p>
            <p className="contact-info">
              <FaPhone className="icon" />
              (83) 2101-1200
            </p>
          </div>
          <div className="contact-card">
            <h2>Suporte Técnico</h2>
            <p>TI - UFCG</p>
            <p className="contact-info">
              <FaEnvelope className="icon" />
              suporte@ufcg.edu.br
            </p>
            <p className="contact-info">
              <FaPhone className="icon" />
              (83) 2101-1100
            </p>
          </div>
      </div>
    </div>
  );
};
