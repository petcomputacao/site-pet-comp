import './autoplay.css';

function AutoPlay(){
    return(
        <div className='slider'>
            <div className='slide-track'>
                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_caesi_sem_fundo.png"}
                         alt='imagem-caesi'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_elas_sem_fundo.png"}
                         alt='imagem-elas'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_guardians_sem_fundo.png"}
                         alt='imagem-guardians'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_IEEE_sem_fundo.png"}
                         alt='imagem-IEEE'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_win_code_competitive_sem_fundo.png"}
                         alt='imagem-wcc'
                         className='content__logo'/>
                </div>

                {/* dupliquei para efeito de "rolagem infinita" */}
                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_caesi_sem_fundo.png"}
                         alt='imagem-caesi'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_elas_sem_fundo.png"}
                         alt='imagem-elas'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_guardians_sem_fundo.png"}
                         alt='imagem-guardians'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_IEEE_sem_fundo.png"}
                         alt='imagem-IEEE'
                         className='content__logo'/>
                </div>

                <div className='content'>
                    <img src={process.env.PUBLIC_URL + "/images/logos/logo_win_code_competitive_sem_fundo.png"}
                         alt='imagem-wcc'
                         className='content__logo'/>
                </div>
            </div>
        </div>
    )
}

export default AutoPlay;