import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import './Carousel.css';

// Os textos dos projetos
const projetos = [
  {
    title: 'Computação e Comunicação',
    content:
      'Os estudantes de computação, apresentam dificuldades na comunicação por meio de diferentes mídias. Considerando a importância de divulgar à sociedade o trabalho realizado na UFCG, esta atividade visa aprimorar essas habilidades por meio do uso de podcasts, blogs, redes sociais e do site do PET Computação.',
  },
  {
    title: 'Mulheres na Computação',
    content:
      'A participação feminina no mercado e na educação superior na área é baixa. E esta atividade propõe uma pesquisa para investigar e conhecer exemplos locais de mulheres na computação. O estudo é realizado em parceria com o grupo elas@computacao da UFCG, que apoia mulheres e promove troca de experiências sobre o tema.',
  },
  {
    title: 'Sustentabilidade e Computação',
    content:
      'A atividade consiste em criar e ministrar um curso de análise descritiva de dados, voltado para estudantes de computação. O objetivo é tornar o aprendizado mais prático e relevante, estimulando o interesse e a conscientização sobre o uso responsável de energia.',
  },
  {
    title: 'Educação e Computação',
    content:
      'Essa atividade consiste em estudar dados acadêmicos dos estudantes do curso de computação da UFCG. O objetivo é analisar aspectos como evasão, retenção e desempenho para apoiar melhorias no curso e na experiência dos alunos. A pesquisa será realizada em parceria com o projeto Eureca/UFCG e resultará em meteriais acadêmicos científicos',
  },
  {
    title: 'Dia do Fera',
    content:
      'A atividade "Dia do Fera" facilita a transição dos ingressantes do ensino médio para o curso de Ciência da Computação da UFCG, com palestras, oficinas e dinâmicas de descompressão. O objetivo é promover conhecimento sobre o curso, a universidade, o mercado de trabalho, além de integrar calouros e veteranos e cuidar da saúde mental.',
  },
  {
    title: 'Computação nas Escolas',
    content:
      'Projeto em desenvolvimento para aproximar estudantes do ensino básico da área de Computação por meio de oficinas práticas e interativas realizadas por petianos.',
  }
];

const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({ children, active, setActive }) => {
  const count = React.Children.count(children);

  return (
    <>
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => setActive(i => i - 1)}>
            <TiChevronLeftOutline />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="card-container"
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              pointerEvents: active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive(i => i + 1)}>
            <TiChevronRightOutline />
          </button>
        )}
      </div>

      {/* Bolinhas indicadores */}
      <div className="carousel-indicators">
        {[...Array(count)].map((_, i) => (
          <button
            key={i}
            className={`indicator${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

const CarrosselProjetos = () => {
  const [active, setActive] = React.useState(3);

  return (
    <Carousel active={active} setActive={setActive}>
      {projetos.map((projeto, i) => (
        <Card key={i} title={projeto.title} content={projeto.content} />
      ))}
    </Carousel>
  );
};

export default CarrosselProjetos;

