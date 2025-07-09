import "../../styles/sobre/SecaoSobre.css"
import Aurora from "../Aurora";
import SobreEsquerda from "./SecaoSobreEsquerda";
import SobreDireita from "./SecaoSobreDireita";

export default function SecaoSobre() {
    return (
        <div className="container-sobre">
            <div className="aurora">
                <Aurora />
            </div>

            <div className="tela-sobre">
                    <SobreEsquerda/>
                    <SobreDireita/>
            </div>
        </div>
    );
}