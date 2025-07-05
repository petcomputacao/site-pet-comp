import "../../styles/sobre/SecaoSobre.css"
import Aurora from "../pagina-inicial/Aurora";
import SobreEsquerda from "./SecaoSobreEsquerda";
import SobreDireita from "./SecaoSobreDireita";

export default function SecaoSobre() {
    return (
        <div className="fuctionPAI">
                <div className="container-aurora">
                    <Aurora />
                </div>

                <div className="tela-sobre">
                    <section className="secao-esquerda">
                        <SobreEsquerda/>
                    </section>

                    <section className="secao-direita">
                        <SobreDireita/>
                    </section>
            </div>
        </div>
    );
}