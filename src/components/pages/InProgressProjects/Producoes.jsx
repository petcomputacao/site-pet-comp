import "../../styles/producoes/producoes.css"

import SliderImages from "../Slider";
import AutoPlay from "../InfiteAutoplay";

export default function Producoes () {
    return (
        <>
        <section className='secao-producoes'>
                <div className='block'>
                    <div className='cabecalho'>
                        <h1 className='titulo-secao'>Nossas Produções</h1>
                    </div>
                    <div className='meio'>
                        <SliderImages />
                    </div>
                    <div className='baixo'>
                        <AutoPlay />
                    </div>
                </div>

            </section>
        </>
    );
};