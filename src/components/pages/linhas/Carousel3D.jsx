import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { useSwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './carousel3D.css';

const slides = [
  { titulo: 'Computação e Comunicação', corpo: 'Os estudantes de computação, apresentam dificuldades na comunicação por meio de diferentes mídias. Considerando a importância de divulgar à sociedade o trabalho realizado na UFCG, esta atividade visa aprimorar essas habilidades por meio do uso de podcasts, blogs, redes sociais e do site do PET Computação.' },
  { titulo: 'Mulheres na Computação', corpo: 'A participação feminina no mercado e na educação superior na área é baixa. E esta atividade propõe uma pesquisa para investigar e conhecer exemplos locais de mulheres na computação. O estudo é realizado em parceria com o grupo elas@computacao da UFCG, que apoia mulheres e promove troca de experiências sobre o tema.' },
  { titulo: 'Computação nas Escolas', corpo: 'Projeto em desenvolvimento para aproximar estudantes do ensino básico da área de Computação por meio de oficinas práticas e interativas realizadas por petianos.' },
  { titulo: 'Sustentabilidade e Computação', corpo: 'A atividade consiste em criar e ministrar um curso de análise descritiva de dados, voltado para estudantes de computação. O objetivo é tornar o aprendizado mais prático e relevante, estimulando o interesse e a conscientização sobre o uso responsável de energia.' },
  { titulo: 'Educação e Computação', corpo: 'Essa atividade consiste em estudar dados acadêmicos dos estudantes do curso de computação da UFCG. O objetivo é analisar aspectos como evasão, retenção e desempenho para apoiar melhorias no curso e na experiência dos alunos. A pesquisa será realizada em parceria com o projeto Eureca/UFCG e resultará em meteriais acadêmicos científicos' },
  { titulo: 'Dia do Fera', corpo: 'A atividade "Dia do Fera" facilita a transição dos ingressantes do ensino médio para o curso de Ciência da Computação da UFCG, com palestras, oficinas e dinâmicas de descompressão. O objetivo é promover conhecimento sobre o curso, a universidade, o mercado de trabalho, além de integrar calouros e veteranos e cuidar da saúde mental.' },
];

function Slide({ titulo, corpo }) {
  const { isActive } = useSwiperSlide();

  return (
    <div className={`slide ${isActive ? 'active' : 'inactive'}`}>
      <h2 className="slide-title">{titulo}</h2>
      <p className="slide-body">{corpo}</p>
    </div>
  );
}

export default function Carousel3D() {
  return (
    <div className="carousel-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="swiper-wrapper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide titulo={slide.titulo} corpo={slide.corpo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
