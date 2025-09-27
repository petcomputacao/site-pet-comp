import './SecaoLinhas.css';

import Carousel from './Carousel.jsx';
import { Reveal } from '../../static/Reveal.tsx';



export default function SecaoLinhas() {
    return(
        <div className='paginaVertentes-container'>
                <div className='titulo-vertentes-container'>
                    <Reveal>
                    <div className='titulo-vertentes'>
                        <h1>
                            Nossas Linhas de Atuação
                        </h1>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="foto-pet">
                        <img 
                        src={process.env.PUBLIC_URL + "/images/logos/logo_pet_fundo_removido.png"} 
                        alt="logo-pet" 
                        className="logo-pet-linhas"
                        />
                    </div>
                    </Reveal>
                    
                </div>
                <div className='linhasAtuação-container'>
                    <Carousel />
                </div>
        </div>
    )
}
