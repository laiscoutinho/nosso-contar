import React from "react";
import Button from "../Button";

export default function PlayCard({ text, icon, onClick }) {
    return (
        <div 
            className="
                w-full
                mion-w-[350px]
                bg-(--white-soft)
                rounded-3xl 
                shadow-md 
                p-5 
                m-4 
                flex 
                items-center
                justify-between
                hover:shadow-lg 
                transition-all 
                duration-300 
                hover:scale-[1.01]
                cursor-pointer
                min-h-[80px]
            "
        >
            {/* Ícone + texto */}
            <div className="flex items-center gap-4">
                <div className="text-(--pink-strong) text-3xl flex items-center">
                    {icon}
                </div>

                <div className="flex flex-col">
                    <p className="text-base font-medium">{text}</p>
                </div>
            </div>

            {/* Botão */}
            <Button  bgColor = "bg-(--pink-strong)" onClick={onClick} > 
                Iniciar 
            </Button>
        </div>
    );
}
