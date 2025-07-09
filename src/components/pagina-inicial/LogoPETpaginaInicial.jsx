import '../../styles/pagina-inicial/LogoPETpaginaInicial.css'; 

function LogoPETpaginaInicial() {
    return(
        <div className="logoPET-container">
            <img
                src={process.env.PUBLIC_URL + "/images/logo-pet.png"}
                alt="Logo do PET"
                className="image-logo"
            />
        </div>
    );
}

export default LogoPETpaginaInicial;