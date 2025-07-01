import Aurora from "../pagina-inicial/Aurora";
import "../../styles/sobre/SecaoSobre.css"

export default function SecaoSobre() {
    return (
        <section className="secao-sobre">
            <div className="container-aurora">
                <Aurora />
            </div>
            <div className="container-texto">
                <h1>NOSSOS PILARES</h1>
            </div>
            <div className="container-vertentes">
                <div className="container-pesquisa">
                    <h2>PESQUISA</h2>
                    <p>Todos os integrantes do PET Computação são incentivados a participar de algum projeto de pesquisa junto a um professor do Departamento de Ciência da Computação da nossa universidade buscando trazer informação e inovação tanto para a área acadêmica quanto para a área da tecnologia.</p>
                </div>
                <div className="container-extensao">
                    <h2>EXTENSÃO</h2>
                    <p>O grupo PET Computação fornece apoio na área de informática para toda a comunidade de Campina Grande, principalmente atuando nas escolas públicas de Ensino Médio da nossa cidade.</p>
                </div>
                <div className="container-tutoria">
                    <h2>TUTORIA</h2>
                    <p>Os integrantes do PET Computação atuam fortemente no âmbito de ensino na universidade, participando voluntariamente como colaboradores de monitoria e fornecendo minicursos para toda a graduação.</p>
                </div>
            </div>
        </section>
    );
}