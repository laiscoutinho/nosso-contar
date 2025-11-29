import React from "react";

function buildMediaSrc(rawLink) {
    if (!rawLink) return null;

    // Google Drive → embed correto (/preview)
    if (rawLink.includes("drive.google.com")) {
        const match = rawLink.match(/\/d\/(.*?)\//);
        const id = match?.[1];
        return id
            ? `https://drive.google.com/file/d/${id}/preview`
            : rawLink;
    }

    // YouTube short → embed
    if (rawLink.includes("youtu.be")) {
        const id = rawLink.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
    }

    // YouTube normal → embed
    if (rawLink.includes("youtube.com/watch")) {
        const id = new URL(rawLink).searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
    }

    // MP4 direto
    if (rawLink.endsWith(".mp4")) {
        return rawLink;
    }

    return rawLink;
}

export default function GameCard({ logo, card, flipped, disabled, onClick }) {

    const mediaSrc =
        card.type === "image"
            ? buildMediaSrc(card.image)
            : buildMediaSrc(card.link);

    const isIframe =
        mediaSrc?.includes("youtube.com/embed") ||
        mediaSrc?.includes("drive.google.com/file");

    return (
        <div
            onClick={() => !disabled && onClick(card)}
            className="w-[150px] h-[200px] sm:w-[170px] sm:h-[230px] md:w-[180px] md:h-[240px] perspective cursor-pointer"
        >
            <div className={`flip-container ${flipped ? "flip" : ""}`}>

                {/* Frente */}
                <div
                    className="flip-face flex items-center justify-center shadow-md"
                    style={{
                        background: "linear-gradient(180deg, #ffd1e8, #ffffff)",
                    }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[80px] h-[80px] object-contain"
                    />
                </div>

                {/* Verso */}
                <div className="flip-face flip-back bg-white shadow-md p-3 flex flex-col items-center">

                    <h3 className="text-(--pink-strong) text-lg font-semibold mb-2 text-center">
                        {card.title}
                    </h3>

                    {/* IMAGEM */}
                    {flipped && card.type === "image" && (
                        <img
                            src={mediaSrc}
                            alt={card.title}
                            className="w-full h-[150px] object-contain rounded-md"
                        />
                    )}

                    {/* VÍDEO */}
                    {flipped && card.type === "video" && (
                        <>
                            {isIframe ? (
                                <iframe
                                    src={mediaSrc}
                                    title={card.title}
                                    className="w-full h-[150px] rounded-md"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    src={mediaSrc}
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-[150px] object-contain rounded-md"
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
