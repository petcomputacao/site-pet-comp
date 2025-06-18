import './Logo.css';

function Logo(){
    return(
        <div className="logo-container">
            <img
                src={process.env.PUBLIC_URL + "/images/logo-pet.png"}
                alt="Logo do Pet"
                className="logo-image"
            />
        </div>
    );
}

export default Logo;