import './ImportantContacts.css';
import ContactCard from './ContatoCard';
import { Reveal } from '../../../components/reveal/Reveal.tsx';


const contatos = [
  {
    title: "Coordenação do Curso",
    email: "coordenacao.cc@ccc.ufcg.edu.br",
    phone: "(83) 2101-1234"
  },
  {
    title: "Secretaria Acadêmica",
    email: "secretaria@ccc.ufcg.edu.br",
    phone: "(83) 2101-1200"
  },
  {
    title: "Suporte Técnico",
    email: "suporte@ufcg.edu.br",
    phone: "(83) 2101-1100"
  }
];

export default function ImportantContacts() {
  return (
    <div className="contacts-container">
      
      <h1 className='contacts-container__title'>
        <Reveal>
          Contatos Importantes
        </Reveal>
      </h1>
      
      <div className="contacts-grid">
          {contatos.map((contato, index) => (
            <ContactCard key={index} {...contato} />
          ))}
      </div>
    </div>
  );
};
