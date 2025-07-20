import "./SecaoSobre.css"
import AuroraCompleta from "../../static/Aurora/AuroraCompleta";

export default function SecaoSobre() {
    return (
        <div className="container-sobre">
            <div className="container-sobre__aurora">
                <AuroraCompleta />
            </div>
            <div className="container-sobre__titulo">
                <h1 className="titulo__PILARES">
                    PILARES
                </h1>
            </div>

            <div className="container-sobre__pilares">
                <div className="pilares__pesquisa">
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_pesquisa.png"} className="pesquisa-logo" alt="logo_pesquisa" />
                    <h2 className="pesquisa__titulo">
                        PESQUISA
                    </h2>
                    <p className="pesquisa__texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna purus, fringilla id vulputate pellentesque, laoreet id ex. Praesent dignissim ultricies mauris sit amet ultricies. Proin venenatis ultricies mauris, ut congue lectus vehicula eget. Sed eros tortor, hendrerit placerat placerat ut, suscipit vel lacus.
                    </p>
                </div>
                <div className="pilares__ensino">
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_ensino.png"} className="ensino-logo" alt="logo_ensino" />
                    <h2 className="ensino__titulo">
                        ENSINO
                    </h2>
                    <p className="ensino__texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna purus, fringilla id vulputate pellentesque, laoreet id ex. Praesent dignissim ultricies mauris sit amet ultricies. Proin venenatis ultricies mauris, ut congue lectus vehicula eget. Sed eros tortor, hendrerit placerat placerat ut, suscipit vel lacus.
                    </p>
                </div>
                <div className="pilares__tutoria">
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_tutoria.png"} className="tutoria-logo" alt="logo_tutoria" />
                    <h2 className="tutoria__titulo">
                        TUTORIA
                    </h2>
                    <p className="tutoria__texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna purus, fringilla id vulputate pellentesque, laoreet id ex. Praesent dignissim ultricies mauris sit amet ultricies. Proin venenatis ultricies mauris, ut congue lectus vehicula eget. Sed eros tortor, hendrerit placerat placerat ut, suscipit vel lacus.
                    </p>
                </div>
            </div>
        </div>
    );
}