import TextoTutor from "./TextoTutor";
import FotoTutor from "./FotoTutor";
import "../../styles/membros/SecaoTutor.css"

export default function SecaoTutor() {
    return (
        <section className="secao-tutor">
            <div className="coluna-esquerda">
                <h1>Tutor(a)</h1>
                <FotoTutor />
                <p>Lívia Maria Rodrigues Sampaio Campos</p>
            </div>
            <div className="coluna-direita">
                <TextoTutor />
            </div>
        </section>
    );
}