import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Play } from "lucide-react";

import trailsVideosData from "../../../service/trailsVideos.json";

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
        </div>
    );
};

export default WatchVideoTrailView;