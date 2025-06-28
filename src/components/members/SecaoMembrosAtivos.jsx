import "../../styles/members/SecaoMembrosAtivos.css"

export default function SecaoMembrosAtivos() {
    return (
        <section className="secao-membros-ativos">
            <div class="coluna">
                <p>Membros Ativos</p>
                <div class="galeria">
                    <div class="item-galeria">
                        <img src={process.env.PUBLIC_URL + "/images/avatar.avif"} alt="Descrição 1" />
                        <span>Descrição</span>
                    </div>
                    <div class="item-galeria">
                        <img src={process.env.PUBLIC_URL + "/images/avatar.avif"} alt="Descrição 2" />
                        <span>Descrição</span>
                    </div>
                    <div class="item-galeria">
                        <img src={process.env.PUBLIC_URL + "/images/avatar.avif"} alt="Descrição 3" />
                        <span>Descrição</span>
                    </div>
                    <div class="item-galeria">
                        <img src={process.env.PUBLIC_URL + "/images/avatar.avif"} alt="Descrição 4" />
                        <span>Descrição</span>
                </div>
        </div>
   </div>
        </section>
    );
}