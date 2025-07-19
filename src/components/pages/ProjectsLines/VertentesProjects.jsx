import './VertentesProjects.css';
import CarrosselProjetos from '../ProjectsLines/Carousel';
import { Reveal } from '../../static/Transicao/Transicaocontainer.tsx';



function Vertentes(){
    return(
        <div className='paginaVertentes-container'>
            <Reveal width="100%">
                <div className='titulo-vertentes-container'>
                    <div className='titulo-vertentes'>
                        <h1>
                            Nossas Linhas de Atuação
                        </h1>
                    </div>
                </div>
            </Reveal>
                <div className='linhasAtuação-container'>
                    <CarrosselProjetos/>
                </div>
        </div>
    )
}

export default Vertentes;
