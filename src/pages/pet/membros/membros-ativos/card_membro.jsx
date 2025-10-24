import "./card_membro.css"

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function CardMembro({ imagem, nome, linkLinkedin, linkGithub }) {
    return (
        <div className="galeria__item">
            <img src={process.env.PUBLIC_URL + imagem} 
                 alt={nome} 
                 className="item__foto-membro-ativo" />
            <div className="item__info">
                <p className="info__nome">{nome}</p>
                <div className="info__icones--redes">
                    {linkLinkedin && (
                        <a
                            href={linkLinkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="redes__link--linkedin"
                        >
                            <FaLinkedin className="linkedin__icone" />
                        </a>
                    )}
                    {linkGithub && (
                        <a
                            href={linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="redes__link--github"
                        >
                            <IoLogoGithub className="github__icone" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardMembro;