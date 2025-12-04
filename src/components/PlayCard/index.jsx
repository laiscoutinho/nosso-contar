import React from "react";
import Button from "../Button";
import { Youtube, Clock } from "lucide-react";

export default function PlayCard({ text, duration, icon, onClick }) {
    return (
        <div
            className="
                w-full
                bg-(--white-soft)
                rounded-3xl 
                shadow-md 
                p-5 
                m-4 
                flex 
                flex-col lg:flex-row   /* <-- mobile: coluna / desktop: linha */
                items-start sm:items-center
                justify-between
                gap-4
                hover:shadow-lg 
                transition-all 
                duration-300 
                hover:scale-[1.01]
                cursor-pointer
            "
        >
            {/* Ícone + texto */}
            <div className="flex items-center gap-4 w-full">
                <div className="text-(--pink-strong) text-3xl flex items-center shrink-0">
                    {icon}
                </div>

                <div className="flex flex-col">
                    <p className="text-base font-medium wrap-break-word">
                        {text}
                    </p>
                </div>
            </div>

            {/* Duração + botão */}
            <div className="flex items-center sm:items-center justify-between sm:justify-end w-full gap-4">
                {duration && (
                    <span className="flex items-center text-base font-medium text-(--pink-strong) gap-1">
                        <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-(--pink-strong)" /> 
                        {duration}
                    </span>
                )}

                <Button
                    onClick={onClick}
                    icon={<Youtube className="w-4 sm:w-5 h-4 sm:h-5 text-(--white-soft)" />}
                    bgColor="bg-(--pink-strong)"
                    animated={false}
                >
                    Iniciar
                </Button>
            </div>
        </div>
    );
}
