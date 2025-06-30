export default function FotoTutor() {
    return (
        <div className="foto-tutor-container">
            <img src={process.env.PUBLIC_URL + "/images/livia.jpeg"} 
                 alt="Foto Tutor" 
                 className="foto-tutor-image"/>
        </div>
    );
}