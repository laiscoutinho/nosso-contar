import { useNavigate } from "react-router-dom";
import { Hand, MapPlus, BookA, HeartHandshake } from "lucide-react";

import Children from "../../assets/decor/children.png";
import Logo from "../../assets/logo/logo_Nosso_Contar.png";
import TitleWithHands from "../../assets/decor/titleWithHands.png";
import TitleAbout from "../../assets/decor/titleAbout.png"
import GirlWithHands from "../../assets/decor/girlWithHands.png"

import Button from "../../components/Button/Button"
import WaveBackground from "../../components/WaveBackground/WaveBackground";
import LearningCard from "../../components/LearningCard/LearningCard";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative h-auto ml:h-[80vh] mb-0 px-6 md:px-10 py-12 bg-(--white-soft) text-center rounded-bl-[50px] rounded-br-[50px] flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10 layout-margin overflow-hidden">
        {/* Imagem das crianças */}
        <div className="flex-1 flex items-center justify-center z-10 mb-8 md:mb-0">
          <img
            src={Children}
            alt="Crianças brincando"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] select-none"
          />
        </div>

        {/* Texto e logo */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left z-10 gap-5">
          <img
            src={Logo}
            alt="Logo Nosso Contar"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-4 sm:mb-6 select-none"
          />

          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-md font-medium">
            <span className="text-(--pink-strong)">Trilhas</span> divertidas, letras que
            ganham vida e <span className="text-(--pink-strong)">histórias</span> cheias
            de sinais.
          </p>

          <Button
            onClick={() => navigate("/historias")}
            icon={<Hand className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
          >
            Ver histórias
          </Button>
        </div>
      </section>

      <WaveBackground offset="-mt-[40px]" />

      <div className="flex flex-col gap-10" style={{ background: `linear-gradient(to bottom, var(--aqua-light), var(--white-soft))` }}>
        <section className="flex flex-col items-center justify-center relative mt-10">
          <img
            src={TitleWithHands}
            alt="O que você vai descobrir"
            className="w-[320px] md:w-[450px] lg:w-[550px] max-w-full select-none"
          />

          <div className="flex flex-wrap justify-center gap-8">
            <LearningCard
              title="Trilhas de Palavras"
              text="Aprenda sinais do dia a dia brincando com palavras divertidas."
              icon={<MapPlus className="w-6 h-6 text-(--pink-strong)" />}
            />
            <LearningCard
              title="Alfabeto e Números"
              text="Descubra como cada letra e número ganha vida nas mãos."
              icon={<BookA className="w-6 h-6 text-(--pink-strong)" />}
            />
            <LearningCard
              title="Histórias que Encantam"
              text="Histórias mágicas para aprender sinais de forma divertida."
              icon={<HeartHandshake className="w-6 h-6 text-(--pink-strong)" />}
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center relative mt-10 gap-5 layout-margin">
          <img
            src={TitleAbout}
            alt="Por que Nosso Contar é Especial"
            className="w-[320px] md:w-[500px] lg:w-[600px] max-w-full select-none transform md:-translate-x-5"
          />

          <h2 className="self-start text-2xl sm:text-3xl md:text-3xl px-6 md:px-10 font-bold mt-8 mb-4 max-w-3xl">
            Por que criamos o Nosso Contar?
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6 layout-margin mt-4">
            <img
              src={GirlWithHands}
              alt="Decoração"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] select-none"
            />

            <p className="text-base font-medium sm:text-lg md:text-xl leading-relaxed">
              O <span className="text-(--pink-strong) font-semibold">Nosso Contar</span> nasceu na disciplina de Libras do curso de Ciência da Computação do IFCE, onde recebemos o desafio de criar um sistema educativo em Libras.

              <br /><br />

              Observamos que muitas crianças encontram dificuldades na <span className="text-(--pink-strong) font-semibold">alfabetização em Libras</span>, e que o mundo ainda é pouco inclusivo.

              <br /><br />

              Por isso, desenvolvemos o <span className="text-(--pink-strong) font-semibold">Nosso Contar</span>: uma plataforma <span className="text-(--pink-strong) font-semibold">lúdica e acessível que ensina sinais por meio de vídeos interativos, trilhas de aprendizado</span> com palavras do universo infantil, alfabeto, números e histórias contadas em Libras, acompanhadas de textos e imagens descritivas para facilitar a assimilação.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
