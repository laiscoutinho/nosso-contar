import children from "../../assets/decor/children.png";
import logo from "../../assets/logo/logo_Nosso_Contar.png";
import Button from "../../components/Button/Button"
import Hand from "../../assets/icons/hand.svg"
import WaveBackground from "../../components/WaveBackground/WaveBackground";

export default function LandingPage({ registerPath }) {
  return (
    <>
<section className="relative h-auto md:h-[80vh] mb-0 px-6 md:px-10 py-12 bg-[var(--white-soft)] text-center rounded-bl-[50px] rounded-br-[50px] flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10 layout-margin overflow-hidden">

  {/* Imagem das crianças */}
  <div className="flex-1 flex items-center justify-center z-10 mb-8 md:mb-0">
    <img 
      src={children} 
      alt="Crianças brincando" 
      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] select-none" 
    />
  </div>

  {/* Texto e logo */}
  <div className="flex-1 flex flex-col items-center text-center md:text-left z-10 gap-5">
    <img 
      src={logo} 
      alt="Logo Nosso Contar" 
      className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-4 sm:mb-6 select-none" 
    />

    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-md">
      <span className="text-[var(--pink-strong)]">Trilhas</span> divertidas, letras que
      ganham vida e <span className="text-[var(--pink-strong)]">histórias</span> cheias
      de sinais.
    </p>

    <Button
      onClick={() => alert("Oi! 👋")}
      icon={<img src={Hand} alt="Hand" className="w-5 sm:w-6 h-5 sm:h-6" />}
    >
      Ver histórias
    </Button>
  </div>
</section>


      
      <WaveBackground offset="-mt-[40px]"/>
    </>
  );
}
