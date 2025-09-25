import "./SecaoMembros.css"
import CardMembro from "./CardMembro";
import { Reveal } from "../../../static/Reveal.tsx";


export default function SecaoMembros() {
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
            imagem: "/images/membros/denilson-deivid-lima-silva.png",
            nome: "Denilson Deivid",
            linkLinkedin: "https://www.linkedin.com/in/denilson-silva-75b170206/",
            linkGithub: "https://github.com/denilsondeivid"
        },
        {
            imagem: "/images/membros/fabiana-simplicio-da-silva.png",
            nome: "Fabiana Simplício",
            linkLinkedin: "https://www.linkedin.com/in/fabiana-simpl%C3%ADcio-a83b922b0/",
            linkGithub: "https://github.com/fabisimplicio"
        },
        {
            imagem: "/images/membros/gabriel-oliveira-rodrigues.png",
            nome: "Gabriel Oliveira",
            linkLinkedin: "https://www.linkedin.com/in/gabrieloliveira42/",
            linkGithub: "https://github.com/GabrielRodrigues-42"
        },
        {
            imagem: "/images/membros/julia-cruz-de-araujo-andrade.png",
            nome: "Júlia Cruz",
            linkLinkedin: "https://www.linkedin.com/in/j%C3%BAlia-cruz-1699262b4/",
            linkGithub: "https://github.com/juliacruzandrade"
        },
        {
            imagem: "/images/membros/rafael-antonio-de-lucena-serey.png",
            nome: "Rafael Serey",
            linkLinkedin: null,
            linkGithub: "https://github.com/rafaelserey"
        },
        {
            imagem: "/images/membros/erik-luan-rodrigues-florencio.png",
            nome: "Erik Luan",
            linkLinkedin: "https://www.linkedin.com/in/erik-luan/",
            linkGithub: "https://github.com/Smilke"
        },
        {
            imagem: "/images/membros/lorena-nascimento-carvalho-gama.png",
            nome: "Lorena Nascimento",
            linkLinkedin: null,
            linkGithub: "https://github.com/lorenacarvalho"
        },
        {
            imagem: "/images/membros/ryan-vinnicius-tielles-almeida-da-silva.png",
            nome: "Ryan Vinnícius",
            linkLinkedin: "https://www.linkedin.com/in/ryanvinnicius/",
            linkGithub: "https://github.com/ryanvinn"
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
