import "./pet_comp_acao_section.css"

import InstagramCardCarrousel from "../../../components/caroussel/instagram-caroussel/instagram_card_carrousel.jsx";
import AutoPlay from "../../../components/autoplay/autoplay.jsx";
import { Reveal } from '../../../components/reveal/reveal.tsx';

export default function PetCompAcaoSection () {
    return (
        <div className="container-producoes">
            <div className="container-producoes__superior">
                <div className="superior__titulo">
                    <Reveal>
                    <h1 className="titulo_PETCOMPACAO">
                        PET COMP | AÇÃO
                    </h1>
                    </Reveal>
                </div>
                <div className="superior__carrossel-instagram">
                    <InstagramCardCarrousel />
                </div>
            </div>
            <div className="container-producoes__inferior">
                <AutoPlay />
            </div>
        </div> 
    );
};