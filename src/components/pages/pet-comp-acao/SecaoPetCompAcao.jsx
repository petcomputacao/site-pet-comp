import "./SecaoPetCompAcao.css"

import SliderImages from "../../static/Slider"
import AutoPlay from "../../static/Autoplay"

export default function SecaoPetCompAcao () {
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
                    <SliderImages />
                </div>
            </div>
            <div className="container-producoes__inferior">
                <AutoPlay />
            </div>
        </div> 
        </>
    );
};