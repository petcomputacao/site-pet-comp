import "../../styles/aurora-completa/AuroraCompleta.css"
import Aurora from '../Aurora'

export default function AuroraCompleta () {
    return (
        <div className='container-aurora-completa'>
            <div className='aurora-superior'>
                <Aurora />
            </div>
            <div className='aurora-inferior'>
                    <Aurora />
            </div>
        </div>
    );
};