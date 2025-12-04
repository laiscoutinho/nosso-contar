import { useNavigate } from "react-router-dom";
import { Hand } from "lucide-react";

import StoriesTitle from '../../assets/decor/titleStories.png'
import iconsHandTitle from "../../assets/decor/trilhasIconsHand.png";
import StoriesInitial from "../../assets/decor/storiesInitial.png";
import StoriesEnding from "../../assets/decor/storiesEnding.png";
import StoryCard from '../../components/storyCard/index';
import WaveBackground from "../../components/WaveBackground/index";
import EndingTitle from '../../components/EndingTitle/index';
import Button from '../../components/Button/index';

import stories from '../../service/storiesCard.json'

const StoriesViewPage = () => {
    const navigate = useNavigate();

    return (
    <> 
        <main className="relative h-auto ml:h-[80vh] mb-0 px-6 md:px-10 py-12 
                    bg-(--white-soft) 
                    text-start 
                    flex flex-col items-start justify-center gap-7 md:gap-10 
                    layout-margin
                    overflow-hidden
                ">
            <div className=" w-full flex items-start space-between gap-6 md:gap-12 flex-nowrap">
                <div className='flex w-full flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0'>
                    {/* Título */}
                    <img
                        src={StoriesTitle}
                        alt="Logo"
                        className="
                                max-h-20 sm:max-h-40 lg:max-h-20 inline-block -translate-y-1 select-none"
                    />

                    {/* Ícones */}
                    <img
                        src={iconsHandTitle}
                        alt="Ícones"
                        className="
                            hidden lg:block
                            max-w-[260px]
                            h-auto 
                            select-none
                        "
                    />
                </div>
            </div>
            {/* ===== CONTENT SECTION ===== */}
            <div className="
                w-full flex flex-col md:flex-row 
                items-center
                justify-between gap-10
            ">

                {/* Texto */}
                <div className="flex-1 text-left">
                    <p className="
                        text-base sm:text-xl md:text-2xl 
                        text-gray-800 max-w-[600px] font-medium
                    ">
                        Aqui, cada gesto conta uma
                        <strong className="text-(--pink-strong)"> história</strong>.
                        Descubra contos encantadores em 
                        <strong className="text-(--pink-strong)"> Libras</strong> e mergulhe em mundos cheios de
                        <span className="text-(--pink-strong)"> cor</span>,
                        <span className="text-(--pink-strong)"> emoção</span> e
                        <span className="text-(--pink-strong)"> imaginação</span>!
                    </p>
                </div>

                {/* Imagem */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={StoriesInitial}
                        alt="Ilustração"
                        className="
                            w-full 
                            max-w-[500px] sm:max-w-[400px]
                            min-w-[400px]
                            object-contain select-none
                        "
                    />
                </div>
            </div>
        </main>
        <div className="
                flex 
                flex-col 
                layout-margin 
                overflow-hidden 
                rounded-bl-[50px] 
                rounded-br-[50px]
            "

            style={{
                background: `
                    linear-gradient(
                    to bottom,
                    var(--white-soft) 0%,
                    var(--aqua-light) 10%,
                    var(--aqua-light) 70%,
                    var(--white-soft) 100%
                    )
                `
            }}
        >

            <section className="flex flex-col items-center justify-center relative mt-10">
                <h2 className="self-start mt-8 mb-4 px-6
                                text-lg sm:text-2xl md:text-[2rem] md:px-10 font-bold">
                    Escolha sua história para começar a imaginar com as mãos!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
                    {stories.map((item) => (
                        <StoryCard
                            key={item.id}
                            id={item.id}
                            title={item.titulo}
                            description={item.descricao}
                            image={item.imagem}
                        />
                    ))}
                </div>
            </section>

            <section className="flex flex-col items-center justify-center relative mt-10 pt-15 gap-10 pb-15 layout-margin">
                <div className="relative w-full max-w-[550px]">
                    <img
                        src={StoriesEnding}
                        alt=""
                        className="w-full select-none"
                    />
                </div>

                <Button
                    onClick={() => navigate("/historias")}
                    icon={<Hand className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
                >
                    Ver jogo
                </Button>
            </section>
        </div>

        <WaveBackground offset="-mt-[40px]" />
        
        <EndingTitle />
    </>
  )
}

export default StoriesViewPage