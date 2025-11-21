import React from 'react';
import { useNavigate } from "react-router-dom";
import { Hand } from "lucide-react";

import trailsData from "../../service/trailsCard.json"

import Logo from "../../assets/logo/logo_Nosso_Contar_wide.png";
import TrilhasTitle from "../../assets/decor/trilhasTitle.png"
import iconsHandTitle from "../../assets/decor/trilhasIconsHand.png";
import trilhasSetas from "../../assets/decor/trilhasInicial.png";
import TitleEnding from "../../assets/decor/titleEnding.png";
import TrilhasEnding from "../../assets/decor/trilhasEnding.svg"

import WaveBackground from "../../components/WaveBackground/index";
import ModuleCard from '../../components/ModuleCard/index';
import Button from '../../components/Button/index';

// renderizar em amarelinha
const buildHopscotch = (data) => {
    const startWithOne = data.length % 2 === 1;
    let expectOne = startWithOne;
    const result = [];
    let i = 0;

    while (i < data.length) {
        if (expectOne) {
            result.push([data[i]]);
            i += 1;
        } else {
            result.push(data.slice(i, i + 2));
            i += 2;
        }
        expectOne = !expectOne;
    }
    return result;
};


const TrailsView = () => {

    const navigate = useNavigate();
    const groups = buildHopscotch(trailsData);

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
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* Título */}
                        <img
                            src={TrilhasTitle}
                            alt="Logo"
                            className="
                                    max-h-8 sm:max-h-13 lg:max-h-14 inline-block -translate-y-1 select-none
                                "
                        />

                        {/* Ícones */}
                        <img
                            src={iconsHandTitle}
                            alt="Ícones"
                            className="
                                max-w-[100px] md:max-w-[120px] lg:max-w-[150px]
                                w-full h-auto 
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
                            text-lg sm:text-xl md:text-2xl 
                            text-gray-800 max-w-[600px] font-medium
                        ">
                            Aqui começa a sua jornada em
                            <span className="text-(--pink-strong)"> Libras</span>!
                            Explore os
                            <span className="text-(--pink-strong)"> módulos</span>, descubra novas palavras e aprenda com
                            <span className="text-(--pink-strong)"> vídeos</span> interativos.
                        </p>
                    </div>

                    {/* Imagem */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src={trilhasSetas}
                            alt="Ilustração"
                            className="
                                w-full 
                                max-w-[300px] 
                                min-w-[150px]
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
                                    text-base sm:text-2xl md:text-[2rem] md:px-10 font-bold max-w-3xl">
                        Escolha sua trilha de aprendizagem
                    </h2>

                    <div className="flex flex-col items-center gap-8 px-6 md:px-10 mt-8">
                        {groups.map((group, index) => (
                            <div
                                key={index}
                                className={`
                                    flex 
                                    ${group.length === 1 ? "justify-center" : "justify-between"}
                                    w-full max-w-[700px]
                                    gap-6
                                `}
                            >
                                {group.map((item) => (
                                    <ModuleCard
                                        key={item.id}
                                        id={item.id}
                                        title={item.titulo}
                                        description={item.descricao}
                                        image={item.imagem}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>


                </section>

                <section className="flex flex-col items-center justify-center relative mt-10 gap-15 pb-25 layout-margin">
                    <div className="relative w-full max-w-[900px]">
                        <img
                            src={TrilhasEnding}
                            alt=""
                            className="w-full select-none"
                        />
                    </div>

                    <Button
                        onClick={() => navigate("/historias")}
                        icon={<Hand className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
                    >
                        Ver histórias
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

export default TrailsView;