import "./SecaoSobre.css"
import { Reveal } from '../../static/Transicao/Transicaocontainer.tsx';


export default function SecaoSobre() {
    return (
        <div className="container-sobre">
            <div className="container-sobre__pilares">
                <div className="pilares__pesquisa">
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_pesquisa.png"} className="pesquisa-logo" alt="logo_pesquisa" />
                    <h2 className="pesquisa__titulo">
                        PESQUISA
                    </h2>
                    <Reveal>
                    <p className="pesquisa__texto">
                        Todos os integrantes do PET Computação desenvolvem pesquisas em diversas áreas da computação, produzem artigos científicos e buscam soluções que fortalecem o conhecimento e a inovação dentro do ambiente acadêmico.                    </p>
                    </Reveal>
                </div>

                <div className="pilares__ensino">
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_ensino.png"} className="ensino-logo" alt="logo_ensino" />
                    <h2 className="ensino__titulo">
                        ENSINO    
                    </h2>
                    <Reveal>
                    <p className="ensino__texto">
                        Os integrantes do PET Computação participam ativamente da vida acadêmica, promovendo eventos e atividades que estimulam o aprendizado, a troca de conhecimento e o desenvolvimento dos alunos da graduação.                    </p>
                    </Reveal>
                </div>
                <div className="pilares__tutoria">
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_tutoria.png"} className="tutoria-logo" alt="logo_tutoria" />
                    <h2 className="tutoria__titulo">
                        EXTENSÃO
                    </h2>
                <Reveal>
                    <p className="tutoria__texto">
                        O PET Computação atua em Campina Grande promovendo inclusão digital e tecnologia por meio de oficinas, cursos e projetos sociais que buscam ampliar o acesso ao conhecimento e melhorar a qualidade de vida da comunidade.                    </p>
                </Reveal>
                </div>
            </div>
        </div>
    );
}