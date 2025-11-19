import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { Play } from "lucide-react";
import iconsHandTitle from "../../../assets/decor/trilhasIconsHand.png";
import TitleEnding from "../../../assets/decor/titleEnding.png";

import Button from '../../../components/Button/Button';
import WaveBackground from "../../../components/WaveBackground/WaveBackground";

import trailsData from "../../../service/trailsCard.json"
import trailsVideosData from "../../../service/trailsVideos.json"
import PlayCard from '../../../components/PlayCard/view';


const DetailTrailView = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const trail = trailsData.find(item => item.id === Number(id));
    const trailVideos = trailsVideosData.find(item => item.id === Number(id));

    const formattedId = trail.id < 10 ? `0${trail.id}` : trail.id;

    return (
        <>
            <main className="relative h-auto mb-0 px-6 md:px-25 py-10 
                            bg-(--white-soft) 
                            rounded-bl-[50px] rounded-br-[50px]
                            flex flex-col gap-12 
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
                                h-full max-h-20
                                object-contain select-none
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
                    <div className="flex-1 text-left">
                        <p className="
                            text-lg sm:text-xl md:text-2xl 
                            text-gray-800 max-w-[600px] font-medium
                        ">
                            O que você irá aprender:
                        </p>
                        <ul className="list-disc pl-6">
                            {trail.learn?.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            <div className="flex flex-col gap-10" style={{ background: `linear-gradient(to bottom, var(--aqua-light), var(--white-soft))` }}>
                <section className="flex flex-col items-center justify-center relative mt-10">
                    <h2 className="self-start mt-8 mb-4 px-6
                                    text-base sm:text-xl md:text-2xl md:px-10 font-bold max-w-3xl">
                        Comece aqui!
                    </h2>

                    <div className="flex flex-col items-center gap-8 px-6 md:px-10 mt-8">
                        {trailVideos?.videos?.map((videoUrl, index) => (
                            <PlayCard
                                key={index}
                                idModulo={trail.id}
                                idVideo={index + 1}
                                subtitle={videoUrl.title}
                                url={videoUrl.link}
                            />
                        ))}
                    </div>

                    <Button
                        onClick={() => navigate("/historias")}
                        icon={<Play className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
                    >
                        Começar
                    </Button>
                </section>
            </div>

            <WaveBackground offset="-mt-[40px]" />

            <aside className="flex items-center justify-center px-3 md:px-6 pt-4 pb-8">
                <img
                    src={TitleEnding}
                    alt="Entre em um mundo de gestos, histórias e descobertas em Libras."
                    className="w-[320px] md:w-[600px] lg:w-[700px] max-w-full select-none transform md:-translate-x-5"
                />
            </aside>
        </>
    )
}

export default DetailTrailView;