import React from "react";
import "./ComputacaoNasEscolas.css";
import "../../App.css";

export default function ComputacaoNasEscolas() {
  const pdfUrl = `${process.env.PUBLIC_URL || ""}/pdfs/computacao-nas-escolas.pdf`;
  const heroImageUrl = `${process.env.PUBLIC_URL || ""}/images/computacao-nas-escolas/computacao-nas-escolas.jpg`;

  return (
    <div className="page-container">
      <div className="hero-wrapper">
        <img
          src={heroImageUrl}
          alt="Computação nas Escolas"
          className="hero-banner"
        />

        <h1 className="page-title">
          Computação nas Escolas: promovendo a cidadania digital
        </h1>
      </div>

      <section className="page-section">
        <h2 className="section-title">Contexto e Objetivos</h2>
        <p className="paragraph">
          A presença da tecnologia no cotidiano de crianças e jovens torna essencial que as escolas abordem não só habilidades técnicas, mas também o uso responsável e consciente das ferramentas digitais. Por isso, é fundamental discutir ética, segurança, participação e respeito nas interações on-line.
          Dentro dessa perspectiva, o <b>Pet Computação - UFCG</b> desenvolve a linha <b>Computação nas Escolas</b>, que tem como objetivo promover a <b>cidadania digital</b> no ambiente escolar. As nossas iniciativas buscam incentivar o ensino da cidadania digital, realizar pesquisas sobre o tema, produzir sequências didáticas alinhadas à BNCC de Computação (2022) e promover ações de extensão que aproximem universidade e escola.
        </p>
      </section>

      <section className="page-section">
        <h2 className="section-title">A BNCC e a Computação na Educação Básica</h2>
        <p className="paragraph">
          Com a atualização da BNCC em 2022, a Computação passou a ser um componente obrigatório no Ensino Fundamental, o que significa que todas as escolas devem trabalhar conhecimentos e práticas dessa área ao longo dos anos iniciais e finais. Para isso, é preciso abordar os três eixos principais:
        </p>

        <ul className="section-list">
          <li><strong>Pensamento Computacional:</strong> envolve estratégias para resolver problemas, como decomposição, reconhecimento de padrões, algoritmos e lógica.</li>
          <li><strong>Cultura Digital:</strong> trata do uso ético, seguro, responsável e crítico da tecnologia, incluindo respeito online, privacidade, responsabilidade nas interações digitais e compreensão do impacto social das tecnologias.</li>
          <li><strong>Mundo Digital:</strong> aborda a compreensão de dispositivos, redes e sistemas, ajudando o estudante a entender como funcionam computadores, softwares, Internet, dados e outras tecnologias que fazem parte do cotidiano.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2 className="section-title">Sequências Didáticas</h2>

        <p className="paragraph">
          A sequência didática (SD) é uma forma de organização pedagógica que visa à construção progressiva e intencional do conhecimento. Trata-se de um conjunto articulado de atividades, organizadas em torno de um objetivo de aprendizagem claro e situado, que promove o desenvolvimento de habilidades de forma gradual, sistemática e significativa.
          Seguindo essa proposta, produzimos SDs baseadas na BNCC de Computação e adotamos as seguintes etapas no planejamento das aulas:
        </p>

        <ul className="section-list">
          <li>Contextualização inicial;</li>
          <li>Desenvolvimento em etapas;</li>
          <li>Integração entre teoria e prática;</li>
          <li>Avaliação contínua;</li>
          <li>Encerramento com síntese do conteúdo e produção final.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2 className="section-title">Aplicação e Resultados</h2>

        <p className="paragraph">
          As sequências didáticas foram aplicadas nas turmas do Ensino Fundamental I da Escola São Domingos Sávio (Campina Grande - PB), com a participação da tutora Lívia Sampaio Campos, membros do Pet Computação e outros alunos do curso de Ciência da Computação da UFCG. A partir das aulas, foram observados resultados significativos, como maior engajamento dos alunos nas aulas de Informática, melhor compreensão sobre o uso ético e seguro das tecnologias, além do fortalecimento do raciocínio lógico e do pensamento computacional. As crianças também demonstraram maior consciência sobre segurança e privacidade, além da importância do respeito e da empatia no ambiente on-line.
        </p>
      </section>

      {/* --- NOVA SEÇÃO ADICIONADA --- */}
      <section className="page-section">
        <h2 className="section-title">Iniciativas e Registros</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Clubinho Digital (IPEN - Casinha de Brinquedo)</h3>
          <p className="paragraph">
            Projeto executado continuamente desde 2021, levando conceitos de tecnologia e cidadania para os pequenos.
          </p>
          <ul className="section-list">
            <li>
              <a href="https://www.youtube.com/watch?v=Ap3X6peFp-A" target="_blank" rel="noopener noreferrer">
                🎥 Assista ao vídeo do Clubinho Digital 2025
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Computação nas Escolas (Associação São Domingos Sávio)</h3>
          
          <p className="paragraph"><strong>Edição 2024:</strong></p>
          <ul className="section-list">
            <li>
              <a href="https://www.instagram.com/p/DDzburAgDwK/" target="_blank" rel="noopener noreferrer">
                📸 Registro de divulgação da Associação
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reels/DEnBLGZuRJ2/" target="_blank" rel="noopener noreferrer">
                🎬 Reel de divulgação da UFCG
              </a>
            </li>
          </ul>

          <p className="paragraph"><strong>Edição 2025:</strong></p>
          <ul className="section-list">
            <li>
              <a href="https://drive.google.com/file/d/1WADD6u_rfn7QZpc9LRZEjkbU1uBPaRbp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                📁 Atividades com Crianças
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1x-vz528VjhA-5UK7yFkzskM0rsz_uI9i/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                📁 Atividades com Adolescentes
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* ---------------------------- */}

      <section className="page-section">
        <h2 className="section-title">
          Faça o Download do PDF com as Sequências Didáticas
        </h2>

        <p className="paragraph">
          Nossas Sequências Didáticas foram elaboradas especialmente para apoiar professores do Ensino Fundamental I que desejam trabalhar temas de Cidadania Digital em suas aulas.
          O material pode ser utilizado diretamente em sala ou servir como inspiração para planejar atividades alinhadas à BNCC. Com essas propostas, você pode incorporar a Cidadania Digital ao cotidiano escolar, promovendo práticas seguras, éticas e colaborativas no ambiente online, e, principalmente, poderá preparar seus alunos para um mundo cada vez mais conectado.
        </p>

        <a
          href={pdfUrl}
          className="download-link"
          download="computacao-nas-escolas.pdf"
        >
          ⬇️ Baixar PDF completo
        </a>
      </section>
    </div>
  );
}