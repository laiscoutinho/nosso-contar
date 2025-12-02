import React from "react";
import { useParams } from "react-router-dom";
import { Play, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import trails from "../../../service/trailsAndGame.json";

import EndingTitle from "../../../components/EndingTitle/index";
import WaveBackground from "../../../components/WaveBackground/index";

const buildVideoSrc = (rawLink) => {
    if (!rawLink) return null;

    // YOUTUBE SHORT (youtu.be)
    if (rawLink.includes("youtu.be")) {
        const id = rawLink.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
    }

    // YOUTUBE NORMAL (watch?v=)
    if (rawLink.includes("youtube.com/watch")) {
        const id = new URL(rawLink).searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
    }

    // GOOGLE DRIVE (file/d/ID/view)
    if (rawLink.includes("drive.google.com")) {
        const match = rawLink.match(/\/d\/(.*?)\//);
        const fileId = match?.[1];
        if (!fileId) return null;
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    return null;
};

const WatchVideoTrailView = () => {
    const navigate = useNavigate();

    const { id: idModulo, idVideo } = useParams();

    const modulo = trails.find(item => item.id === Number(idModulo));
    const video = modulo?.pairs?.find(v => v.id === Number(idVideo));

    const formattedId = Number(idVideo) < 10 ? `0${idVideo}` : idVideo;

    return (
        <>
            <div
                className="
                    flex 
                    flex-col 
                    gap-6 
                    pt-4 sm:pt-6 md:pt-10
                    pr-4 sm:pr-6 md:pr-10
                    pl-4 sm:pl-6 md:pl-10
                    pb-15 md:pb-25
                    overflow-hidden 
                    layout-margin 
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
                <div className="flex flex-col gap-4">

                    {/* Linha com H1 e botão Voltar */}
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-base sm:text-2xl md:text-4xl 
                            font-bold leading-tight
                            max-w-full text-left">
                            Módulo
                            <span className="text-(--pink-strong)"> {modulo.titulo}! </span>
                        </h1>

                        <button
                            onClick={() => navigate(-1)}
                            className="
                                flex items-center gap-2
                                text-(--pink-strong)
                                hover:scale-105
                                transition
                            "
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="text-lg font-semibold">Voltar</span>
                        </button>
                    </div>

                    {/* Linha 2 — Play + H2 */}
                    <div className="flex items-center gap-4">
                        <div
                            className="
                                flex items-center justify-center
                                w-14 h-14 rounded-2xl
                                bg-(--pink-strong)
                            "
                        >
                            <Play className="w-7 h-7 text-(--white-soft)" />
                        </div>

                        <div className="text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-(--dark)">
                                Vídeo {formattedId}: <span className="text-(--pink-strong)">{video?.title ?? "Título indisponível"}</span>
                            </h2>
                        </div>
                    </div>
                </div>



                {/* PLAYER + LISTA LATERAL */}
                <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">

                    {/* PLAYER esquerdo */}
                    <div
                        className="
                            w-full lg:w-3/4
                            bg-black
                            rounded-2xl
                            overflow-hidden
                            shadow-md
                            aspect-video
                            max-h-[800px]
                        "
                    >
                        {video?.link ? (
                            <iframe
                                className="w-full h-full"
                                src={buildVideoSrc(video.link)}
                                title={video?.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white">
                                Vídeo não encontrado
                            </div>
                        )}
                    </div>

                    {/* LISTA lateral à direita */}
                    <div
                        className="
                            w-full lg:w-1/4
                            rounded-2xl
                            bg-(--white-soft)
                            shadow-md
                            p-4
                            flex flex-col
                            overflow-y-auto
                            max-h-[800px]
                        "
                    // 16:9 → altura do player
                    >
                        <h3 className="text-lg font-bold mb-3 text-(--dark)">
                            Outros vídeos
                        </h3>

                        <div className="flex flex-col gap-3">

                            {modulo?.pairs?.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => navigate(`/trilhas/${idModulo}/video/${item.id}`)}
                                    className={`
                                        p-3 rounded-xl cursor-pointer transition flex items-center justify-between gap-3
                                        ${item.id === Number(idVideo)
                                            ? "bg-(--pink-soft) border border-(--pink-light)"
                                            : "hover:bg-(--aqua-light)"
                                        }
                                    `}
                                >
                                    <p className="text-base font-semibold text-(--dark)">
                                        Vídeo {item.id < 10 ? `0${item.id}` : item.id}: {item.title}
                                    </p>

                                    <span className="text-sm font-semibold text-(--pink-strong)">
                                        {item.duration}
                                    </span>
                                </div>

                            ))}

                        </div>
                    </div>

                </div>

            </div>

            <WaveBackground offset="-mt-[40px]" />

            <EndingTitle />
        </>
    );
};

export default WatchVideoTrailView;