import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./card_carousel.css";

const infos = [
  {
    titulo: "Computação e Comunicação",
    corpo: "Os estudantes de computação, apresentam dificuldades na comunicação por meio de diferentes mídias. Considerando a importância de divulgar à sociedade o trabalho realizado na UFCG, esta atividade visa aprimorar essas habilidades por meio do uso de podcasts, blogs, redes sociais e do site do PET Computação.",
  },
  {
    titulo: "Mulheres na Computação",
    corpo: "A participação feminina no mercado e na educação superior na área é baixa. E esta atividade propõe uma pesquisa para investigar e conhecer exemplos locais de mulheres na computação. O estudo é realizado em parceria com o grupo elas@computacao da UFCG, que apoia mulheres e promove troca de experiências sobre o tema.",
  },
  {
    titulo: "Computação nas Escolas",
    corpo: "Por meio de pesquisas, produção de sequências didáticas e aplicação em atividades de extensão, o projeto promove o ensino de Computação e Cidadania Digital nas escolas, contribuindo com o desenvolvimento do pensamento computacional, o uso ético das tecnologias e a compreensão do mundo digital.",
  },
  {
    titulo: "Sustentabilidade e Computação",
    corpo: "A atividade consiste em criar e ministrar um curso de análise descritiva de dados, voltado para estudantes de computação. O objetivo é tornar o aprendizado mais prático e relevante, estimulando o interesse e a conscientização sobre o uso responsável de energia.",
  },
  {
    titulo: "Educação e Computação",
    corpo: "Essa atividade consiste em estudar dados acadêmicos dos estudantes do curso de computação da UFCG. O objetivo é analisar aspectos como evasão, retenção e desempenho para apoiar melhorias no curso e na experiência dos alunos. A pesquisa será realizada em parceria com o projeto Eureca/UFCG e resultará em meteriais acadêmicos científicos",
  },
  {
    titulo: "Dia do Fera",
    corpo: 'A atividade "Dia do Fera" facilita a transição dos ingressantes do ensino médio para o curso de Ciência da Computação da UFCG, com palestras, oficinas e dinâmicas de descompressão. O objetivo é promover conhecimento sobre o curso, a universidade, o mercado de trabalho, além de integrar calouros e veteranos e cuidar da saúde mental.',
  },
];

export default function CardCarousel() {
  return (
    <div className="carousel">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="carousel-track"
        style={{ padding: '0 10%' }}
      >
        {infos.map((info, index) => (
          <SwiperSlide key={index}>
            <h2 className="slide-title">{info.titulo}</h2>
            <p className="slide-body">{info.corpo}</p>

            {/* Adiciona link para "Computação nas Escolas" */}
            {info.titulo === "Computação nas Escolas" && (
              <Link to="/computacao-nas-escolas" className="slide-link">
                Acesse a nossa página para saber mais
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
