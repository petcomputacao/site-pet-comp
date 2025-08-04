import "./producoes.css"

import CardCarrousel from "../../static/CardCarrousel";
import AutoPlay from "../../static/InfiteAutoplay";

export default function Producoes () {
    return (
        <>
        <div className="container-producoes">
            <div className="container-producoes__superior">
                <div className="superior__titulo">
                    <h1 className="titulo_PETCOMPACAO">
                        PET COMP | AÇÃO
                    </h1>
                </div>
                <div className="superior__carrossel-instagram">
                    <CardCarrousel />
                </div>
            </div>
            <div className="container-producoes__inferior">
                <AutoPlay />
            </div>
        </div> 
        </>
    );
};