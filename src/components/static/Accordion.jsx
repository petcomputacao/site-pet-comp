import "./Accordion.css";
import { useState } from "react";
import { FaClipboardList, FaBookOpen, FaUserFriends, FaEnvelope } from "react-icons/fa";

const faqs = [
  {
    icon: <FaClipboardList />,
    question: "1. Como me matricular nas disciplinas?",
    answer: "Acesse o SIGAA, vá em Portal do (Discente/Ensino/Matrícula Online/Realizar Matricula). Preste atenção nos pré-requisitos e horários."
  },
  {
    icon: <FaBookOpen />,
    question: "2. Onde encontro o material das aulas?",
    answer: "Os professores disponibilizam no SIGAA (Portal do Discente/Componente Curricular) ou em plataformas específicas como Google Classroom."
  },
  {
    icon: <FaUserFriends />,
    question: "3. Como participar dos grupos extracurriculares?",
    answer: "Fique atento aos processos seletivos do PET, monitoria, projetos de pesquisa e extensão divulgados no curso através do email institucional."
  },
  {
    icon: <FaEnvelope />,
    question: "4. Qual a importância do e-mail institucional?",
    answer: "É sua identidade acadêmica oficial. Usado para acessar sistemas, receber comunicações e validar sua vinculação à UFCG."
  }
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? "open" : ""}`}
        >
          <div className="accordion-header" onClick={() => toggleFAQ(index)}>
            <span className="accordion-icon">{faq.icon}</span>
            <h2 className="accordion-question">{faq.question}</h2>
            <span className={`accordion-arrow ${openIndex === index ? "rotate" : ""}`}>&#9656;</span>
          </div>
          <div className="accordion-body">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
