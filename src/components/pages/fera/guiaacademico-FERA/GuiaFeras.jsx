import React from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';
import './GuiaFeras.css';

const GuiaFeras = () => {
  return (
    <div className="feras-guide-container">
      <header className="feras-header">
        <h1 className="feras-main-title">Guia Acadêmico dos Feras</h1>
        <p className="feras-introduction">
          Tudo que você precisa saber sobre as disciplinas do primeiro período. 
          Dicas, conteúdos e estratégias para um semestre de sucesso!
        </p>
      </header>

      <div className="disciplinas-grid">
        {/* Disciplina 1 */}
        <div className="disciplina-card">
          <h1 className="disciplina-titulo">Programação 1</h1>
          
          <div className="disciplina-metadata">
            <p><strong>4 créditos</strong></p>
            <p>60h</p>
            <p>Pré-reg: Nenhum</p>
          </div>
          
          <p className="disciplina-descricao">
            Introdução aos conceitos fundamentais de programação utilizando linguagem Python.
          </p>
          
          <div className="divider"></div>
          
          <h2 className="topicos-titulo">Principais Tópicos</h2>
          <ul className="topicos-lista">
            <li>Tipos de dados e variáveis</li>
            <li>Estruturas condicionais</li>
            <li>Estruturas de repetição</li>
            <li>Funções e procedimentos</li>
            <li>Listas e strings</li>
          </ul>
          
          <div className="divider"></div>
          
          <h2 className="dicas-titulo">Dicas de Veterano</h2>
          <ul className="dicas-lista">
            <li>Pratique programação diariamente, mesmo que por 30 minutos</li>
            <li>Use o site HackerRank ou URI Online Judge para exercitar</li>
            <li>Participe dos grupos de estudo e monitoria</li>
            <li>Não deixe acumular dúvidas - tire sempre na aula seguinte</li>
          </ul>
        </div>

        {/* Disciplina 2 */}
        <div className="disciplina-card">
          <h1 className="disciplina-titulo">Laboratório de Programação 1</h1>
          
          <div className="disciplina-metadata">
            <p><strong>4 créditos</strong></p>
            <p>60h</p>
            <p>Pré-reg: Cursar junto com Programação 1</p>
          </div>
          
          <p className="disciplina-descricao">
            Prática de programação com exercícios e projetos complementares à disciplina teórica.
          </p>
          
          <div className="divider"></div>
          
          <h2 className="topicos-titulo">Principais Tópicos</h2>
          <ul className="topicos-lista">
            <li>Exercícios práticos de programação</li>
            <li>Desenvolvimento de pequenos projetos</li>
            <li>Debugging e teste de código</li>
            <li>Trabalho em equipe</li>
            <li>Boas práticas de programação</li>
          </ul>
          
          <div className="divider"></div>
          
          <h2 className="dicas-titulo">Dicas de Veterano</h2>
          <ul className="dicas-lista">
            <li>Chegue sempre preparado com os conceitos da aula teórica</li>
            <li>Traga suas dúvidas específicas para aproveitar melhor o lab</li>
            <li>Forme grupos de estudo com os colegas</li>
            <li>Documente bem seu código desde o início</li>
          </ul>
        </div>

        {/* Disciplina 3 */}
        <div className="disciplina-card">
          <h1 className="disciplina-titulo">Introdução à Computação</h1>
          
          <div className="disciplina-metadata">
            <p><strong>4 créditos</strong></p>
            <p>60h</p>
            <p>Pré-requisito: Nenhum</p>
          </div>
          
          <p className="disciplina-descricao">
            Visão geral da área de Ciência da Computação, suas subáreas e aplicações.
          </p>

          <div className="divider"></div>
          
          <h2 className="topicos-titulo">Principais Tópicos</h2>
          <ul className="topicos-lista">
            <li>História da computação</li>
            <li>Áreas da Ciência da Computação</li>
            <li>Algoritmos e complexidade</li>
            <li>Sistemas computacionais</li>
            <li>Impactos sociais da computação</li>
          </ul>
          
          <div className="divider"></div>
          
          <h2 className="dicas-titulo">Dicas de Veterano</h2>
          <ul className="dicas-lista">
            <li>Esta disciplina é mais conceitual - foque na compreensão</li>
            <li>Relacione os conceitos com exemplos práticos do dia a dia</li>
            <li>Participe das discussões em aula</li>
            <li>Pesquise sobre as diferentes áreas da computação</li>
          </ul>
        </div>

        {/* Disciplina 4 */}
        <div className="disciplina-card">
          <h1 className="disciplina-titulo">Fundamentos da Matemática para CC</h1>
          
          <div className="disciplina-metadata">
            <p><strong>4 créditos</strong></p>
            <p>60h</p>
            <p>Pré-requisito: Nenhum</p>
          </div>
          

          <p className="disciplina-descricao">
            Base matemática essencial para o curso de Ciência da Computação.
          </p>

          <div className="divider"></div>
          
          <h2 className="topicos-titulo">Principais Tópicos</h2>
          <ul className="topicos-lista">
            <li>Lógica proposicional</li>
            <li>Teoria dos conjuntos</li>
            <li>Relações e funções</li>
            <li>Indução matemática</li>
            <li>Combinatória básica</li>
          </ul>
          
          <div className="divider"></div>
          
          <h2 className="dicas-titulo">Dicas de Veterano</h2>
          <ul className="dicas-lista">
            <li>Revise conceitos básicos de matemática do ensino médio</li>
            <li>Pratique exercícios regularmente</li>
            <li>Use a monitoria - é fundamental nesta disciplina</li>
            <li>Relacione os conceitos matemáticos com aplicações em computação</li>
          </ul>
        </div>
      </div>

      {/* Rodapé */}
      <div className="ajuda-container">
        <h1 className="ajuda-titulo">Precisa de mais ajuda?</h1>
        <p className="ajuda-texto">
          Lembre-se: o PET Computação está sempre disponível para ajudar os calouros!
        </p>
        <div className="dicas-rapidas">
          <div className="dica-item">
            <FaCheckSquare className="dica-icon" />
            <span>Dica: Use sempre a monitoria disponível</span>
          </div>
          <div className="dica-item">
            <FaCheckSquare className="dica-icon" />
            <span>Organize-se desde o primeiro dia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaFeras;