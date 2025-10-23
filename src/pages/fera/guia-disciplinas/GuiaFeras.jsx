import './GuiaFeras.css';
import DisciplinaCard from './DisciplinaCard';
import { Reveal } from '../../../components/reveal/Reveal.tsx';


const disciplinas = [
  {
    titulo: "Programação 1",
    creditos: "4 créditos",
    horas: "60h",
    preRequisito: "Nenhum, mas deve ser ser cursada junto à Lab. Programação 1.",
    descricao: "Introdução aos conceitos fundamentais de programação utilizando linguagem Python.",
    topicos: [
      "Tipos de dados e variáveis",
      "Estruturas condicionais",
      "Estruturas de repetição",
      "Funções e procedimentos",
      "Listas e strings"
    ],
    dicas: [
      "Pratique programação diariamente, mesmo que por 30 minutos",
      "Use o site HackerRank ou URI Online Judge para exercitar",
      "Participe dos grupos de estudo e monitoria",
      "Não deixe acumular dúvidas - tire sempre na aula seguinte"
    ],
  },
  {
    titulo: "Laboratório de Programação 1",
    creditos: "4 créditos",
    horas: "60h",
    preRequisito: "Nenhum, mas deve ser ser cursada junto à Programação 1.",
    descricao: "Prática de programação com exercícios e projetos complementares à disciplina teórica.",
    topicos: [
      "Exercícios práticos de programação",
      "Desenvolvimento de pequenos projetos",
      "Debugging e teste de código",
      "Trabalho em equipe",
      "Boas práticas de programação"
    ],
    dicas: [
      "Chegue sempre preparado com os conceitos da aula teórica",
      "Traga suas dúvidas específicas para aproveitar melhor o lab",
      "Forme grupos de estudo com os colegas",
      "Documente bem seu código desde o início"
    ],
  },
  {
    titulo: "Introdução à Computação",
    creditos: "4 créditos",
    horas: "60h",
    preRequisito: "Nenhum.",
    descricao: "Visão geral da área de Ciência da Computação, suas subáreas e aplicações.",
    topicos: [
      "História da computação",
      "Áreas da Ciência da Computação",
      "Algoritmos e complexidade",
      "Sistemas computacionais",
      "Impactos sociais da computação"
    ],
    dicas: [
      "Esta disciplina é mais conceitual - foque na compreensão",
      "Relacione os conceitos com exemplos práticos do dia a dia",
      "Participe das discussões em aula",
      "Pesquise sobre as diferentes áreas da computação"
    ],
  },
  {
    titulo: "Fundamentos da Matemática para CC",
    creditos: "4 créditos",
    horas: "60h",
    preRequisito: "Nenhum.",
    descricao: "Base matemática essencial para o curso de Ciência da Computação.",
    topicos: [
      "Lógica proposicional",
      "Teoria dos conjuntos",
      "Relações e funções",
      "Indução matemática",
      "Combinatória básica"
    ],
    dicas: [
      "Revise conceitos básicos de matemática do ensino médio",
      "Pratique exercícios regularmente",
      "Use a monitoria - é fundamental nesta disciplina",
      "Relacione os conceitos matemáticos com aplicações em computação"
    ],
  }
];

function GuiaFeras() {
  return (
    <div className="feras-guide-container">
      <Reveal width='100%'>
      <header className="feras-header">
        <h1 className="feras-main-title">Guia Acadêmico dos Feras</h1>
        <p className="feras-introduction">
          Tudo que você precisa saber sobre as disciplinas do primeiro período. 
          Dicas, conteúdos e estratégias para um semestre de sucesso!
        </p>
      </header>
      </Reveal>
      <div className="disciplinas-grid">
        {disciplinas.map((disciplina, index) => (
          <Reveal width='100%'>
          <DisciplinaCard key={index} {...disciplina}/>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default GuiaFeras;