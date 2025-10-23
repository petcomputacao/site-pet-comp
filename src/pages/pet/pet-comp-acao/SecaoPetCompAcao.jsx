import "./SecaoPetCompAcao.css"

import CardCarrousel from '../../../components/card-carroussel/CardCarrousel.jsx';
import AutoPlay from "../../../components/autoplay/Autoplay.jsx";
import { Reveal } from '../../../components/reveal/Reveal.tsx';

export default function SecaoPetCompAcao () {
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
                    <CardCarrousel />
                </div>
            </div>
            <div className="container-producoes__inferior">
                <AutoPlay />
            </div>
        </div> 
    );
};