import React from "react";
import { useNavigate } from "react-router-dom";

import { Play, YoutubeIcon } from "lucide-react";
import Button from "../../components/Button/Button";

const PlayCard = ({ idModulo, idVideo, subtitle }) => {
    const navigate = useNavigate();
    const formattedId = idVideo < 10 ? `0${idVideo}` : idVideo;

    return (
        <div
            className="
                w-full
                flex items-center justify-between
                bg-(--white-soft) rounded-2xl shadow-md
                p-4
                hover:shadow-lg transition-shadow duration-300
                min-h-[90px]
            "
        >
            {/* Ícone + texto */}
            <div className="flex items-center gap-4">
                <div
                    className="
                        flex items-center justify-center
                        w-12 h-12 rounded-xl
                        bg-(--pink-strong)
                    "
                >
                    <Play className="text-(--white-soft) w-6 h-6" />
                </div>

                <div>
                    <p className="text-lg font-semibold text-(--dark)">
                        Vídeo {formattedId}
                    </p>
                    <p className="text-(--gray-dark)">{subtitle}</p>
                </div>
            </div>

            {/* Botão */}
            <Button
                onClick={() => navigate(`/trilhas/${idModulo}/video/${idVideo}`)}
                icon={<YoutubeIcon className="w-5 h-5 text-(--white-soft)" />}
                bgColor="bg-(--pink-strong)"
            >
                Iniciar
            </Button>
        </div>
    );
};

export default PlayCard;
