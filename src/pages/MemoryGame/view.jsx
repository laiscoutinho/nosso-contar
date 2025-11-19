import React from "react";

import { Hand, Smile, Puzzle, Sparkles } from "lucide-react";
import iconsHandTitle from "../../assets/decor/trilhasIconsHand.png";
import trilhasSetas from "../../assets/decor/trilhasInicial.png";
import TitleEnding from "../../assets/decor/titleEnding.png";

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
                className="
                    relative h-auto mb-0 px-6 md:px-20 py-10 
                    bg-(--white-soft)
                    rounded-bl-[50px] rounded-br-[50px]
                    flex flex-col gap-12 
                    overflow-hidden
                "
            >
                <div className="w-full flex items-start justify-between gap-6 md:gap-12">
                    <h2
                        className="
                            text-base sm:text-2xl md:text-4xl 
                            font-bold leading-tight
                            max-w-full text-left
                        "
                    >
                        Hora de brincar e aprender com as mãos!
                    </h2>

                    <img
                        src={iconsHandTitle}
                        alt="Ícones"
                        className="h-full max-h-20 object-contain select-none"
                    />
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
                    <p
                        className="
                            flex-1 text-left
                            text-lg sm:text-xl md:text-2xl 
                            text-gray-800 max-w-[600px] font-medium
                        "
                    >
                        Combine 
                        <span className="text-(--pink-strong)"> sinais</span>,
                        <span className="text-(--pink-strong)"> palavras</span> e
                        <span className="text-(--pink-strong)"> imagens</span>,
                        enquanto se diverte com o nosso
                        <span className="text-(--pink-strong)"> jogo da memória</span>
                        interativo em 
                        <span className="text-(--pink-strong)"> Libras</span>!
                    </p>

                    <img
                        src={trilhasSetas}
                        alt="Ilustração"
                        className="flex-1 w-full max-w-[300px] min-w-[150px] object-contain"
                    />
                </div>
            </main>

            {/* ===== COMO JOGAR ===== */}
            <div
                className="flex flex-col gap-16 py-12"
                style={{
                    background: `linear-gradient(to bottom, var(--aqua-light), var(--white-soft))`,
                }}
            >
                <section className="px-6 md:px-10">
                    <h2 className="text-base sm:text-xl md:text-2xl font-bold mb-6">
                        Como jogar?
                    </h2>

                    <ul className="flex flex-col gap-4 mt-4">
                        {howPlay.map((step, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-lg text-gray-800"
                            >
                                <span className="text-(--pink-strong) mt-1">{step.icon}</span>
                                <p className="font-medium max-w-[550px]">{step.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="px-6 md:px-10 flex flex-col gap-6">
                    <h2 className="text-base sm:text-xl md:text-2xl font-bold">
                        Continue explorando e se divertindo com nosso
                        <span className="text-(--pink-strong)"> Jogo da Memória </span>!
                    </h2>
                    <PlayGame />
                </section>
            </div>

            <WaveBackground offset="-mt-[40px]" />

            <aside className="flex items-center justify-center px-3 md:px-6 pt-4 pb-8">
                <img
                    src={TitleEnding}
                    alt="Entre em um mundo de gestos, histórias e descobertas em Libras."
                    className="
                        w-[320px] md:w-[600px] lg:w-[700px] 
                        max-w-full select-none transform md:-translate-x-5
                    "
                />
            </aside>
        </>
    );
};

export default MemoryGameView;