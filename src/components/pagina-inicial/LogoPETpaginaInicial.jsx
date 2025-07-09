import '../../styles/pagina-inicial/LogoPETpaginaInicial.css'; 

function LogoPETpaginaInicial() {
    return(
        <div className="logoPET-container">
            <img
                src={process.env.PUBLIC_URL + "/images/exemplos/exemplo.jpg"}
                alt="exemplo"
                className="imagem-exemplo"
            />
        </div>
    );
}

export default LogoPETpaginaInicial;