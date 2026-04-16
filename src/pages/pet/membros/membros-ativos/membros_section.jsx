import "./membros_section.css"
import CardMembro from "./card_membro.jsx";
import { Reveal } from '../../../../components/reveal/reveal.tsx';

export default function MembrosSection() {
    const membros = [
        {
            imagem: "/images/membros/arthur-campos-arruda-de-freitas.png",
            nome: "Arthur Campos",
            linkLinkedin: "https://www.linkedin.com/in/arthur-freitas-016775213/",
            linkGithub: "https://github.com/Arthur-Campos-Freitas"
        },
        {
            imagem: "/images/membros/carlos-artur-santana-sales.png",
            nome: "Carlos Artur",
            linkLinkedin: "https://www.linkedin.com/in/carlos-artur-438557264/",
            linkGithub: "https://github.com/CarlosArturr"
        },
        {
            imagem: "/images/membros/pedro-leal-e-lima.png",
            nome: "Pedro Leal",
            linkGithub: "https://github.com/pedroleal02"
        },
        {
            imagem: "/images/membros/ana_paula_soares_torres_cassimiro.png",
            nome: "Ana Paula Cassimiro",
            linkLinkedin: null,
            linkGithub: "https://github.com/ana-paula-soares"
        },
        {
            imagem: "/images/membros/lucas-farias-bezerra-de-lima.png",
            nome: "Lucas Lima",
            linkLinkedin: null,
            linkGithub: "https://github.com/lucasfariasbl"
        },
        {
            imagem: "/images/membros/luiz-anselmo-medeiros-lima.png",
            nome: "Luiz Anselmo",
            linkLinkedin: "https://www.linkedin.com/in/luiz-anselmo-medeiros-lima",
            linkGithub: "https://github.com/luizmlima"
        },
        {
            imagem: "/images/membros/marina-morais-lacerda.png",
            nome: "Marina Lacerda",
            linkLinkedin: "https://www.linkedin.com/in/marina-lacerda-a7b38b333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            linkGithub: "https://github.com/marinamoraisml"
        },
        {
            imagem: "/images/membros/augusto-de-brito-lopes.png",
            nome: "Augusto Lopes",
            linkLinkedin: "https://www.linkedin.com/in/augusto-lopes-7a6399264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appã",
            linkGithub: "https://github.com/AugustoBritoLopes"
        },
        {
            imagem: "/images/membros/lorena-nascimento-carvalho-gama.png",
            nome: "Lorena Nascimento",
            linkLinkedin: null,
            linkGithub: "https://github.com/lorenacarvalho"
        },
        {
            imagem: "/images/membros/gleydson-fabricio-rodrigues-de-moura.png",
            nome: "Gleydson Fabrício",
            linkLinkedin: null,
            linkGithub: "https://github.com/gleydsonfabricio"
        },
        {
            imagem: "/images/membros/maria-eduarda-ramos-lucena-maia.png",
            nome: "Eduarda Maia",
            linkLinkedin: "https://www.linkedin.com/in/maria-eduarda-ramos-317350357",
            linkGithub: "https://github.com/eduardarlmaia"
        }
    ];

    return (
        <div className="container-membros">
            <div className="membros__titulo">
                <Reveal>
                    <p>Membros Ativos</p>
                </Reveal>
            </div>
            <div className="membros__galeria">
                {membros.map((membro, index) => (
                    <Reveal width="100%">
                        <CardMembro
                            key={index}
                            imagem={membro.imagem}
                            nome={membro.nome}
                            linkLinkedin={membro.linkLinkedin}
                            linkGithub={membro.linkGithub}
                        />
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
