import './SecaoLinhas.css';

import Carousel3D from './Carousel3D.jsx';
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
                        src={process.env.PUBLIC_URL + "/images/logos/logo-pet.png"} 
                        alt="logo-pet" 
                        className="logo-pet-linhas"
                        />
                    </div>
                    </Reveal>
                    
                </div>
                <div className='linhasAtuação-container'>
                    <Carousel3D/>
                </div>
        </div>
    )
}
