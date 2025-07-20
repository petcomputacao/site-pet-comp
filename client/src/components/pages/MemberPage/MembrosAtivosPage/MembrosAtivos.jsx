import "./MembrosAtivos.css"

export default function SecaoMembrosAtivos() {
    return (
        <div className="container-membros">
            <div className="membros__titulo">
                <p>Membros</p>
            </div>
            <div className="membros__galeria">
                {/* 12 membros */}
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Arthur-Campos-Arruda-de-Freitas.png"} 
                            alt="Descrição 1" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Arthur Campos Arruda de Freitas</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/arthur-freitas-016775213/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Arthur-Campos-Freitas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Carlos-Artur-Santana-Sales.jpg"} 
                            alt="Descrição 2" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Carlos Artur Santana Sales</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/carlos-artur-438557264/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/arthur-fernandes-vieira.jpg"} 
                            alt="Descrição 3" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Arthur Fernandes Vieira</p>
                        <div className="info__icones--redes">
                            <a
                                href="www.linkedin.com/in/arthur-fernandes-67a2032b6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/arthur-ccc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Guilherme-Jose-Araujo-Oliveira.jpeg"} 
                            alt="Descrição 4" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Guilherme Jose Araujo Oliveira</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/guilhermejose05/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/gjose05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Denilson-Deivid-Lima-Silva.jpg"} 
                            alt="Descrição 5" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Denilson Deivid Lima Silva</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/denilson-silva-75b170206/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/denilsondeivid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Fabiana-Simplício-da-Silva.jpg"} 
                            alt="Descrição 6" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Fabiana Simplício da Silva</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/fabiana-simpl%C3%ADcio-a83b922b0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/fabisimplicio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Gabriel-Oliveira-Rodrigues.jpg"} 
                            alt="Descrição 7" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Gabriel Oliveira Rodrigues</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/gabrieloliveira42/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/GabrielRodrigues-42"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Júlia-Cruz-de-Araújo-Andrade.png"} 
                            alt="Descrição 8" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Júlia Cruz de Araújo Andrade</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/j%C3%BAlia-cruz-1699262b4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Rafael-Antonio-de-Lucena-Serey.jpg"} 
                            alt="Descrição 9" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Rafael Antonio de Lucena Serey</p>
                        <div className="info__icones--redes">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/rafaelserey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Erik-Luan-Rodrigues-Florêncio.jpg"} 
                            alt="Descrição 10" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Erik Luan Rodrigues Florêncio</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/erik-luan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Smilke"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Lorena-Nascimento-Carvalho-Gama.jpg"} 
                            alt="Descrição 11" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Lorena Nascimento Carvalho Gama</p>
                        <div className="info__icones--redes">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="galeria__item">
                    <img src={process.env.PUBLIC_URL + "/images/membros/Ryan-Vinnícius-Tielles-Almeida-da-Silva.jpg"} 
                            alt="Descrição 12" 
                            className="item__foto-membro-ativo" />
                    <div className="item__info">
                        <p className="info__nome">Ryan V. Tielles Almeida da Silva</p>
                        <div className="info__icones--redes">
                            <a
                                href="https://www.linkedin.com/in/ryanvinnicius/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--linkedin"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="linkdin__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.5v2.9h.06c.63-1.2 2.17-2.48 4.44-2.48 4.75 0 5.62 3.13 5.62 7.2V24h-5V15c0-2.16-.04-4.94-3-4.94-3 0-3.46 2.35-3.46 4.78V24h-5V8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/ryanvinn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="redes__link--github"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="github__icone"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.17a10.92 10.92 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.48 3.16-1.17 3.16-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.38-2.69 5.34-5.25 5.62.43.37.81 1.1.81 2.23v3.3c0 .31.21.66.8.55A10.5 10.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}