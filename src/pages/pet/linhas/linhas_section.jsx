import './linhas_section.css';

import Carousel from '../../../components/caroussel/card-caroussel/card_carousel.jsx';
import { Reveal } from '../../../components/reveal/reveal.tsx';



export default function LinhasSection() {
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
