import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { Play } from "lucide-react";
import iconsHandTitle from "../../../assets/decor/trilhasIconsHand.png";

import Button from '../../../components/Button/index';
import WaveBackground from "../../../components/WaveBackground/index";
import PlayCard from '../../../components/PlayCard/index';
import EndingTitle from "../../../components/EndingTitle/index";
import ItemListLI from '../../../components/Texts/ItemListLI';

import trails from "../../../service/trailsAndGame.json";

const DetailTrailView = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const trail = trails.find(item => item.id === Number(id));

    const formattedId = trail.id < 10 ? `0${trail.id}` : trail.id;

    return (
        <>
            <main className="relative h-auto ml:h-[80vh] mb-0 px-6 md:px-10 py-12 
                    bg-(--white-soft) 
                    text-start 
                    flex flex-col items-start justify-center gap-7 md:gap-10 
                    layout-margin
                    overflow-hidden
                ">

                <div className=" w-full flex items-start space-between gap-6 md:gap-12 flex-nowrap ">
                    <div className='flex flex-nowrap'>
                        {/* Título */}
                        <h2 className="
                            text-base sm:text-2xl md:text-4xl 
                            font-bold leading-tight
                            max-w-full text-left
                        ">
                            Trilha de aprendizagem
                            <span className="text-(--pink-strong)"> {formattedId}</span>:
                            Módulo
                            <span className="text-(--pink-strong)"> {trail.titulo}! </span>
                        </h2>
                    </div>
                    <div>
                        {/* Ícones */}
                        <img
                            src={iconsHandTitle}
                            alt="Ícones"
                            className="
                                hidden lg:block
                                max-w-[150px]
                                w-full h-auto 
                                select-none
                            "
                        />
                    </div>
                </div>

                {/* ===== CONTENT SECTION ===== */}
                <div className="
                    w-full flex flex-col md:flex-row 
                    items-center md:items-start 
                    justify-between gap-10
                ">
                    {/* Texto */}
                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Texto */}
                        <p className="text-base sm:text-xl md:text-2xl text-gray-800 font-medium">
                            O que você irá aprender:
                        </p>

                        {/* Lista */}
                        <ul className="list-disc pl-6 text-base sm:text-xl md:text-2xl text-gray-800 font-medium">
                            {trail.conteudo?.map((topic, index) => (
                                <ItemListLI
                                    key={index}
                                    index={index}
                                    text={topic}
                                />
                            ))}
                        </ul>
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
                <section className="flex flex-col items-center justify-center relative mt-10 pb-25 gap-8">
                    <h2 className="self-start mt-8 mb-4 px-6
                                    text-base sm:text-xl md:text-2xl md:px-10 font-bold max-w-3xl">
                        Comece aqui!
                    </h2>

                    <div
                        className="
                        grid 
                        grid-cols-1
                        md:grid-cols-2
                        gap-8 
                        px-6 md:px-10 mt-8
                        w-full
                    ">
                        {trail.pairs?.map((video, index) => (
                            <PlayCard
                                key={index}
                                image={video.image}
                                text={video.title}
                                duration={video.duration}
                                icon={<Play />}
                                onClick={() => navigate(`/trilhas/${trail.id}/video/${video.id}`)}
                            />
                        ))}
                    </div>


                    <Button
                        onClick={() => navigate("/historias")}
                        icon={<Play className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
                        bgColor="bg-(--pink-strong)"
                        animated={false}
                    >
                        Ver História
                    </Button>
                </section>
            </div>

            <WaveBackground offset="-mt-[40px]" />

            <EndingTitle />
        </>
    )
}

export default DetailTrailView;