import './Logo_UFCG.css';

function Logo_UFCG(){
    return(
        <div className="logo2-container">
            <img
                src={process.env.PUBLIC_URL + "/images/logo-ufcg.png"}
                alt="Logo da UFCG"
                className="logo2-image"
            />
        </div>
    );
}

export default Logo_UFCG;