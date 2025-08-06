import '../../styles/projetos-desenvolvimento/Projetos.css';
import CarrosselVertical from './CarrosselVertical';

export default function Projetos () {
    return (
        <section className='secao-projeto'>
            <h1 className='titulo-secao'>Projetos em Desenvolvimento</h1>
            <div className='block'>
                <div className='esquerda'>
                    <img
                        src={process.env.PUBLIC_URL + "/images/exemplos/exemplo.jpg"}
                        alt="exemplo"
                        className="imagem-exemplo"
                    />
                    <div className='container-texto'>
                        <p className='paragrafo'>
                            Nessa seção, você pode ver as linhas de atuação do PET Computação que estão em produção.
                        </p>
                    </div>
                </div>
                <div className='direita'>
                    <CarrosselVertical />
                </div>
            </div>

        </section>
    );
};