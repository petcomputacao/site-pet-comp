import './DicasVeterano.css';
import DicaCard from './DicaCard';
import { FaEnvelope, FaWhatsapp, FaBook, FaLaptop } from 'react-icons/fa';
import { Reveal } from '../../../static/Reveal.tsx'


const dicas = [
  {
    icon: FaEnvelope,
    title: "E-mail Institucional",
    text: "Use sempre seu e-mail institucional (@ccc.ufcg.edu.br) para comunicações acadêmicas e acesso aos sistemas da universidade."
  },
  {
    icon: FaWhatsapp,
    title: "Grupos de WhatsApp",
    text: "Participe dos grupos de sua turma e do curso para ficar por dentro de avisos importantes e se conectar com os colegas."
  },
  {
    icon: FaBook,
    title: "Locais de Estudo",
    text: "Conheça a biblioteca central, salas de estudo do LCC e outros espaços para estudar no campus."
  },
  {
    icon: FaLaptop,
    title: "Como acessar o SIGAA",
    text: "Sistema acadêmico da UFCG onde você consulta notas, se matricula em disciplinas e acessa informações do curso."
  }
]

export default function DicasVeterano() {
  return (
    <Reveal>
    <div className="dicas-container">
      <div className="dicas-header">
          <h1>Dicas de <span className="veterano-text">Veterano</span></h1>
          <p className="dicas-intro">
            Informações essenciais para te ajudar a navigar pela vida acadêmica na UFCG.
            Desde o básico até dicas avançadas de quem já passou por isso.
          </p>
      </div>

      <div className="dicas-content">
        <h2 className='dicas-content__titulo'>Dicas Essenciais</h2>

        <div className="dicas-grid">
            {dicas.map((dica, index) => (
              <DicaCard key={index} {...dica} />
            ))}
        </div>
      </div>
    </div>
    </Reveal>
  );
};