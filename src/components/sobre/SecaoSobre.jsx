import Aurora from "../pagina-inicial/Aurora";
import "../../styles/sobre/SecaoSobre.css"
import SobreEsquerda from "./SecaoSobreEsquerda";
import SobreDireita from "./SecaoSobreDireita";

export default function SecaoSobre() {
    return (
        <div className="fuctionPAI">
            {/*container aurora*/}
                <div className="container-aurora">
                    <Aurora />
                </div>

                <div className="tela-sobre">
                    {/*metade da esquerda da tela*/}
                    <section className="secao-esquerda">
                        <SobreEsquerda/>
                    </section>

                    {/*metade da direita da tela*/}
                    <section className="secao-direita">
                        <SobreDireita/>
                    </section>
            </div>
        </div>
    );
}