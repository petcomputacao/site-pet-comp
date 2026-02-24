import React from "react";
import "./ComputacaoNasEscolas.css"; // estilos específicos da página
import "../../App.css"; // estilos globais (fontes)

export default function ComputacaoNasEscolas() {
  return (
    <div className="page-container">

      {/* IMAGEM + TÍTULO LADO A LADO */}
      <div className="hero-wrapper">

        <img
          src="./images/computacao-nas-escolas/computacao-nas-escolas.jpg"
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
          A sequência didática (SD) é uma forma de organização pedagógica que visa à construção progressiva e intencional do conhecimento. Trata-se de um conjunto articulado de atividades, organizadas em torno de um objetivo de aprendizagem claro e situado, que promove o desenvolvimento de habilidades de forma gradual, sistemática e signifi cativa.
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

      <section className="page-section">
        <h2 className="section-title">Faça o Download do PDF com as Sequências Didáticas</h2>

        <p className="paragraph">
          Nossas Sequências Didáticas foram elaboradas especialmente para apoiar professores do Ensino Fundamental I que desejam trabalhar temas de Cidadania Digital em suas aulas.
          O material pode ser utilizado diretamente em sala ou servir como inspiração para planejar atividades alinhadas à BNCC. Com essas propostas, você pode incorporar a Cidadania Digital ao cotidiano escolar, promovendo práticas seguras, éticas e colaborativas no ambiente online, e, principalmente, poderá preparar seus alunos para um mundo cada vez mais conectado.
        </p>
      </section>

      <section className="page-section">
        <a
          href="/pdfs/computacao-nas-escolas.pdf"
          download="computacao-nas-escolas.pdf"
          className="download-link"
        >
          ⬇️ Baixar PDF completo
        </a>
      </section>

    </div>
  );
}
