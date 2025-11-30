import React from "react";

import { Hand, Smile, Puzzle, Sparkles } from "lucide-react";
import SectionHero from "../../assets/decor/game/gameHero.png";
import iconsHandTitle from "../../assets/decor/game/IconsHand.png";
import TitleEnding from "../../assets/decor/home/titleEnding.png";

import TitleH1 from "../../components/Texts/TitleH1/index";
import TitleH2 from "../../components/Texts/TitleH2/index";
import SubtitleP from "../../components/Texts/SubtitleP";
import ItemListLI from "../../components/Texts/ItemListLI";
import WaveBackground from "../../components/WaveBackground/index";
import PlayGame from "./PlayGame/view";

const howPlay = [
    { description: "Toque nas cartas e descubra o que se esconde atrás de cada uma.", icon: <Hand /> },
    { description: "Cada sinal tem uma imagem amiga — será que você consegue juntar todas?", icon: <Smile /> },
    { description: "As cartas voltam pro lugar, e você ganha outra chance de tentar.", icon: <Puzzle /> },
    { description: "Complete o jogo e mostre que você é um mestre dos sinais!", icon: <Sparkles /> },
];

const MemoryGameView = () => {
    return (
        <>
            <main
                className="relative h-auto mb-0 px-10 md:px-20 py-10 layout-margin
                           bg-(--white-soft) flex flex-col gap-12 overflow-hidden"
            >
                <TitleH1
                    title={"Hora de brincar e aprender com as mãos!"}
                    image={iconsHandTitle}
                    altImage={"Ícones"}
                />

                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    <SubtitleP>
                        Combine{" "}
                        <span className="text-(--pink-strong)">sinais</span>,{" "}
                        <span className="text-(--pink-strong)">palavras</span> e{" "}
                        <span className="text-(--pink-strong)">imagens</span>, enquanto se diverte com o nosso{" "}
                        <span className="text-(--pink-strong)">jogo da memória</span> interativo em{" "}
                        <span className="text-(--pink-strong)">Libras</span>!
                    </SubtitleP>

                    <img
                        src={SectionHero}
                        alt="Ilustração de uma mão estilizada segurando uma coroa."
                        className="flex-1 w-full max-w-[300px] min-w-[150px] object-contain mr-60"
                    />
                </div>

                <section>
                    <TitleH2>Como jogar?</TitleH2>

                    <ul className="flex flex-col gap-4 mt-4">
                        {howPlay.map((step, index) => (
                            <ItemListLI
                                key={index}
                                index={index}
                                text={step.description}
                                icon={step.icon}
                            />
                        ))}
                    </ul>
                </section>
            </main>

            <section
                className="mb-0 px-10 md:px-20 py-10 flex flex-col gap-8 layout-margin"
                style={{
                    background: "linear-gradient(to bottom, var(--white-soft), var(--aqua-light))",
                }}
            >
                <TitleH2>
                    Combine sinais e imagens para aprender brincando com nosso
                    <span className="text-(--pink-strong)"> Jogo da Memória </span>!
                </TitleH2>

                <PlayGame />
                
            </section>

            <section
                className="w-full pt-10 pb-20 layout-margin rounded-b-3xl"
                style={{
                    background: "linear-gradient(to bottom, var(--aqua-light), var(--white-soft))",
                }}
            ></section>
            
            <WaveBackground offset="-mt-[40px]" />

            <aside className="flex items-center justify-center px-3 md:px-6 pt-4 pb-8">
                <img
                    src={TitleEnding}
                    alt="Entre em um mundo de gestos, histórias e descobertas em Libras."
                    className="w-[320px] md:w-[600px] lg:w-[700px] max-w-full select-none transform md:-translate-x-5"
                />
            </aside>
        </>
    );
};

export default MemoryGameView;
