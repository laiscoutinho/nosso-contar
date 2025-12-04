import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

import { Play, CircleCheck, CircleX } from "lucide-react"
import Logo from "../../../assets/logo/logo_Nosso_Contar.png";

import TitleH2 from "../../../components/Texts/TitleH2/index"
import GameCard from "../../../components/GameCard/index";
import Button from "../../../components/Button";

import trails from "../../../service/trailsAndGame.json";

export default function PlayGameView({ trilhaId = 1 }) {

    const [currentTrilha, setCurrentTrilha] = useState(trilhaId);
    const trail = trails.find((t) => t.id === Number(currentTrilha));

    const [start, setStart] = useState(false);
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [finished, setFinished] = useState(false);

    const acertos = cards.filter(c => c.matched === true).length / 2; 
    const erros = cards.filter(c => c.matched === false).length / 2;
    const chunk = (arr, size) =>
        arr.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(arr.slice(i, i + size));
            return acc;
        }, []);

    useEffect(() => {
        if (!start) return;

        const trilha = trails.find((t) => t.id === Number(currentTrilha));
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
        setFinished(false);
    }, [start, currentTrilha]);

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
                setCards((prev) =>
                    prev.map((c) =>
                        c.uid === choiceOne.uid || c.uid === choiceTwo.uid
                        ? { ...c, matched: false }
                        : c
                    )
                );
                setTimeout(resetTurn, 900); // altera o tempo de desvirar a carta, quando o match está errado
            }
        }
    }, [choiceOne, choiceTwo]);

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    };

    useEffect(() => {
        if (start && cards.length && cards.every((c) => c.matched)) {
            setFinished(true);
            setTimeout(() => {
                const nextTrilhaId = currentTrilha + 1 > trails.length ? 1 : currentTrilha + 1;
                setCurrentTrilha(nextTrilhaId);
            }, 3000);
        }
    }, [cards, start]);

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
                    <div className="mt-4 w-full flex justify-between items-start px-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <CircleCheck className="text-(--pink-strong)" />
                                    Acertos: {acertos}
                                </div>
                                <div className="flex gap-2">
                                    <CircleX className="text-(--pink-strong)" />
                                    Erros: {erros}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            {chunk(Array(trails.length).fill(0), 7).map((row, rowIndex) => {
                                const trilhasCompletas = currentTrilha - 1;
                                return (
                                    <div key={rowIndex} className="flex gap-2">
                                        {row.map((_, index) => {
                                            const globalIndex = rowIndex * 7 + index;
                                            const isFilled = globalIndex < trilhasCompletas;
                                            return (
                                                <div
                                                    key={globalIndex}
                                                    className={`w-6 h-6 rounded-full border-2 border-(--pink-strong)
                                                        ${isFilled ? "bg-(--pink-strong)" : "bg-white"}`}
                                                ></div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {finished && (
                        <>
                            <Confetti numberOfPieces={200} recycle={false} />
                            <div className="mt-6 text-4xl font-bold text-(--pink-strong)">
                                🎉 Parabéns! 🎉
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}