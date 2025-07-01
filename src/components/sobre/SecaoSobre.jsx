import Aurora from "../pagina-inicial/Aurora";
import "../../styles/sobre/SecaoSobre.css"

export default function SecaoSobre() {
    return (
        <section className="secao-sobre">
            <div className="container-aurora">
                <Aurora />
            </div>
            <div className="container-texto">
                <h1>NOSSAS VERTENTES</h1>
            </div>
            <div className="container-vertentes">
                <div className="container-pesquisa">
                    <h2>PESQUISA</h2>
                    <p>Todos os integrantes do PET Computação são fortemente incentivados a participar de projetos de pesquisa desenvolvidos junto aos professores do Departamento de Ciência da Computação da nossa universidade. Essa integração proporciona uma imersão direta no ambiente acadêmico, estimulando a troca de conhecimento entre alunos e docentes e o desenvolvimento de pesquisas alinhadas às demandas atuais da computação.
                        Ao se envolverem nessas atividades, os estudantes têm a oportunidade de aplicar conceitos teóricos em problemas reais, contribuir para a produção científica da universidade e fomentar a inovação tecnológica. Esse engajamento fortalece o vínculo entre o ensino e a pesquisa, essencial para a formação de profissionais críticos e preparados para atuar tanto no meio acadêmico quanto no mercado tecnológico.
                    </p>
                </div>
                <div className="container-extensao">
                    <h2>EXTENSÃO</h2>
                    <p>O grupo PET Computação atua de forma ativa na extensão universitária, oferecendo suporte na área de informática para toda a comunidade de Campina Grande. Uma das principais frentes desse trabalho é o atendimento às escolas públicas de Ensino Médio da cidade, onde o grupo promove oficinas, palestras e atividades práticas voltadas para o ensino da computação e o desenvolvimento de habilidades digitais.
                        Essas ações têm como objetivo democratizar o acesso ao conhecimento tecnológico, despertar o interesse dos jovens pela área de Ciência da Computação e contribuir para a formação de futuros profissionais qualificados. Por meio dessa atuação, o PET Computação fortalece a relação entre a universidade e a sociedade, ampliando o impacto social e educacional do curso de graduação.
                    </p>
                </div>
                <div className="container-tutoria">
                    <h2>TUTORIA</h2>
                    <p>Os integrantes do PET Computação desempenham um papel fundamental no ensino dentro da universidade, atuando voluntariamente como monitores em diversas disciplinas do curso de Ciência da Computação. Além disso, organizam e ministram minicursos e workshops abertos a toda a comunidade acadêmica, com o objetivo de complementar a formação dos estudantes e aprofundar conhecimentos específicos.
                        Essas atividades de tutoria e capacitação contribuem para o fortalecimento do aprendizado, auxiliando colegas na superação de desafios acadêmicos e promovendo o desenvolvimento de habilidades técnicas e práticas essenciais para a carreira dos futuros profissionais da computação.
                        </p>
                </div>
            </div>
        </section>
    );
}