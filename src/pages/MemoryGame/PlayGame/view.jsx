import React, { useState, useEffect } from "react";

import { Play } from "lucide-react"
import Logo from "../../../assets/logo/logo_Nosso_Contar.png";

import TitleH2 from "../../../components/Texts/TitleH2/index"
import GameCard from "../../../components/GameCard/index";
import Button from "../../../components/Button";

import trails from "../../../service/trailsAndGame.json";

export default function PlayGameView({ trilhaId = 1 }) {

    const trail = trails.find(item => item.id === Number(trilhaId));

    const [start, setStart] = useState(false);
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (!start) return;

        const trilha = trails.find((t) => t.id === Number(trilhaId));
        if (!trilha) return;

        const shuffledPairs = [...trilha.pairs].sort(() => Math.random() - 0.5);
        const selectedPairs = shuffledPairs.slice(0, 4);

        // monta as 8 cartas (4 imagens + 4 vídeos)
        const generated = selectedPairs
            .flatMap((pair) => [
                {
                    id: pair.id,
                    title: pair.title,
                    image: pair.image,
                    type: "image",
                    uid: `${pair.id}-img`,
                    matched: false
                },
                {
                    id: pair.id,
                    title: pair.title,
                    link: pair.link,
                    type: "video",
                    uid: `${pair.id}-vid`,
                    matched: false
                }
            ])
            .sort(() => Math.random() - 0.5);

        setCards(generated);
    }, [start]);

    const handleChoice = (card) => {
        if (!choiceOne) {
            setChoiceOne(card);
        } else if (!choiceTwo && card.uid !== choiceOne.uid) {
            setChoiceTwo(card);
        }
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);

            if (choiceOne.id === choiceTwo.id) {
                setCards(prev =>
                    prev.map((c) =>
                        c.id === choiceOne.id ? { ...c, matched: true } : c
                    )
                );
                resetTurn();
            } else {
                setTimeout(resetTurn, 900);
            }
        }
    }, [choiceOne, choiceTwo]);

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {!start && (
                <Button 
                    bgColor="bg-(--pink-strong)"
                    fontSize="text-xl"
                    icon={<Play />}
                    className="px-20 py-5 text-5xl font-bold shadow-lg"
                    onClick={() => setStart(true)}
                >
                    JOGAR
                </Button>
            )}

            {start && (
                <div>
                    <TitleH2 className="text-center sm:text-xl md:text-3xl">
                        Tema:
                        <span className="text-(--pink-strong)"> {trail.titulo}</span>
                    </TitleH2>

                    <div
                        className="grid grid-cols-4 gap-4 mt-6 w-760 h-520"
                        style={{ width: "760px", height: "520px" }}
                    >
                        {cards.map((card) => {
                            const flipped =
                                card.matched ||
                                card.uid === choiceOne?.uid ||
                                card.uid === choiceTwo?.uid;

                            return (
                                <GameCard
                                    key={card.uid}
                                    logo={Logo}
                                    card={card}
                                    flipped={flipped}
                                    disabled={disabled}
                                    onClick={() => handleChoice(card)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}