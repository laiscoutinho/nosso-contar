import React from "react";

export default function PlayCard({ logo, card, flipped, disabled, onClick }) {
    return (
        <div onClick={() => !disabled && onClick()}
            className="
                w-[150px] h-[200px]
                sm:w-[170px] sm:h-[230px]
                md:w-[180px] md:h-[240px]
                perspective cursor-pointer
            "
        >
            <div className={`flip-container ${flipped ? "flip" : ""}`}>

                {/* Frente — logo */}
                <div
                    className="flip-face flex items-center justify-center shadow-md"
                    style={{
                        background: "linear-gradient(180deg, #ffd1e8, #ffffff)",
                    }}
                >
                    <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
                </div>

                {/* Verso — conteudo */}
                <div className="flip-face flip-back bg-white shadow-md p-3 flex flex-col items-center overflow-hidden"
                >
                    <h3 className="text-(--pink-strong) text-lg font-semibold mb-2 text-center">
                        {card.titulo}
                    </h3>

                    {card.type === "video" ? (
                        <iframe
                        className="w-full h-[120px] rounded-md"
                        src={card.video.replace("shorts/", "embed/")}
                        title={card.titulo}
                        allowFullScreen
                        />
                    ) : (
                        <img
                        src={card.imagem}
                        alt={card.titulo}
                        className="w-full h-[200px] object-contain rounded-md"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}