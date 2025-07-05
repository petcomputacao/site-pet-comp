import '../../styles/header-static/LogoPET.css'; 

function LogoPET() {
    return(
        <div className="logo2-container">
            <img
                src={process.env.PUBLIC_URL + "/images/logo-pet-branco.png"}
                alt="Logo da UFCG"
                className="logo2-image"
            />
        </div>
    );
}

export default LogoPET;