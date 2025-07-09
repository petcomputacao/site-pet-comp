import "../../styles/sobre/SecaoSobre.css"
import SobreEsquerda from "./SecaoSobreEsquerda";
import SobreDireita from "./SecaoSobreDireita";

export default function SecaoSobre() {
    return (
        <div className="container-sobre">
            <SobreEsquerda/>
            <SobreDireita/>
        </div>
    );
}