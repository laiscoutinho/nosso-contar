import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Play } from "lucide-react";

import trailsVideosData from "../../../service/trailsVideos.json";

const WatchVideoTrailView = () => {
    
    const { id: idModulo, idVideo } = useParams();
    const navigate = useNavigate();

    const modulo = trailsVideosData.find(item => item.id === Number(idModulo));
    const video = modulo?.videos?.[Number(idVideo) - 1];

    const formattedId = Number(idVideo) < 10 ? `0${idVideo}` : idVideo;

    return (
        <div className="w-full flex flex-col gap-6 p-4 sm:p-6 md:p-10">
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
                    <h1 className="text-2xl md:text-3xl font-bold text-(--dark)">
                        Vídeo {formattedId}
                    </h1>
                    <p className="text-(--gray-dark) text-lg">
                        {video?.title ?? "Título indisponível"}
                    </p>
                </div>
            </div>

            {/* PLAYER */}
            <div
                className="
                    w-full
                    bg-black
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    aspect-video
                "
            >
                {video?.link ? (
                    <iframe
                        className="w-full h-full"
                        src={video.link.replace("youtu.be/", "www.youtube.com/embed/")}
                        title={video?.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                        Vídeo não encontrado
                    </div>
                )}
            </div>
        </div>
    );
};

export default WatchVideoTrailView;