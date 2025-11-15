import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";

import Logo from "../../assets/logo/logo_Nosso_Contar_wide.png";
import NotFoundGif from "../../assets/decor/notFound.gif";

import Footer from "../../components/layout/Footer/Footer"
import Button from "../../components/Button/Button";
import WaveBackground from "../../components/WaveBackground/WaveBackground";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="relative top-0 left-0 h-25 bg-(--white-soft) text-pink-strong z-50 px-10 flex items-center justify-between layout-margin">
        <div className="flex items-center">
          <img src={Logo} alt="Logo Nosso contar" className="w-auto max-w-40 md:max-w-60 select-none" />
        </div>
      </header>

      {/* conteúdo principal */}
      <div className="flex-1 flex flex-col md:flex-row bg-(--white-soft) items-center justify-center px-6 md:px-10 py-12 text-center rounded-bl-[50px] rounded-br-[50px] gap-7 md:gap-10 layout-margin overflow-hidden">
        {/* Lado do vídeo */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={NotFoundGif}
            alt="Crianças brincando em Libras"
            loading="lazy"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>

        {/* Lado do texto */}
        <div className="md:w-1/2 flex flex-col space-y-20 md:space-y-30 items-end px-6 md:px-12 min-h-full">
          <div className="text-center max-w-lg">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-right">
              Ops! Este caminho perdeu o sinal. Que tal voltar e tentar outro gesto?
            </h1>
          </div>

          <div className="mb-10 md:mb-0">
            <Button
              onClick={() => navigate("/")}
              icon={<House className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
              bgColor="bg-(--pink-strong)"
              animated={false}
              padding = "py-3 px-10 lg:px-20"
            >
              VOLTAR PRO INÍCIO
            </Button>
          </div>
        </div>


      </div>

      <WaveBackground offset="-mt-[40px]" />
      <Footer />
    </div>
  );
}