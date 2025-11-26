import React from "react";
import { useNavigate } from "react-router-dom";

import { Telescope } from "lucide-react";
import tijoloCard from "../../assets/decor/trailsCards/trailsTijoloCard.png";

import Button from "../Button";

const ModuleCard = ({ id, title, description, image }) => {
    const navigate = useNavigate();

    const imageSrc = new URL(
        `../../assets/decor/trailsCards/${image}`,
        import.meta.url
    ).href;

    return (
        <div
            className=" relative flex flex-col justify-center items-center text-center
                        bg-(--white-soft) rounded-3xl shadow-md
                        p-6 m-[15px]
                        hover:shadow-lg transition-shadow duration-300
                        min-w-[270px] max-h-full min-h-[270px] 
                        sm:w-[320px] sm:h-80 sm:max-w-[320px]
                        md:w-[310px] md:h-80 md:max-w-[310px]
                        lg:w-[320px] lg:h-80 lg:max-w-[320px]
                        overflow-visible
                    "
        >
            {/* Tijolo com ID */}
            <div className="absolute top-4 -left-4 w-12 h-12">
                <img
                    src={tijoloCard}
                    alt="tijolo"
                    className="w-full h-full object-contain"
                />
                <span
                    className=" absolute inset-0 flex items-center justify-center 
                                text-(--pink-strong) font-extrabold text-2xl 
                            "
                >
                    {id}
                </span>
            </div>

            {/* Imagem lateral */}
            <img
                src={imageSrc}
                alt={title}
                className=" absolute w-[60px] sm:w-auto max-h-[90%]
                            -right-7 sm:-right-9 top-1/2 -translate-y-1/2
                            object-contain pointer-events-none
                        "
            />

            {/* Título e descrição */}
            <div className="mt-8 px-3 z-10">
                <h3 className="text-(--pink-strong) text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                    Módulo {title}
                </h3>
                <p className="mt-5 text-base font-medium text-(--black) leading-snug">
                    {description}
                </p>
            </div>

            {/* Botão */}
            <div className="mt-6 z-10 flex justify-center w-full">
                <Button
                    onClick={() => navigate(`/trilhas/${id}`)}
                    icon={<Telescope className="w-5 h-5 text-(--white-soft)" />}
                    bgColor="bg-(--pink-strong)"
                    animated={false}
                >
                    Explorar
                </Button>
            </div>
        </div>
    );
};

export default ModuleCard;