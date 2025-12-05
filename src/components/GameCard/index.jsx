import React from "react";

function buildMediaSrc(rawLink, type) {
    if (!rawLink) return null;

    // Google Drive
    if (rawLink.includes("drive.google.com")) {
        const match = rawLink.match(/\/d\/(.*?)\//);
        const id = match?.[1];

        if (!id) return rawLink;

        return type === "image"
            ? `https://drive.google.com/thumbnail?id=${id}`
            : `https://drive.google.com/file/d/${id}/preview`;
    }

    // YouTube short
    if (rawLink.includes("youtu.be")) {
        const id = rawLink.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
    }
    // YouTube normal
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
            ? buildMediaSrc(card.image, "image")
            : buildMediaSrc(card.link, "video");

    const isIframe =
        mediaSrc?.includes("youtube.com/embed") ||
        mediaSrc?.includes("drive.google.com/file");

    return (
        <div
            onClick={() => !disabled && onClick(card)}
            className="w-[150px] h-[200px] sm:w-[170px] sm:h-[230px] md:w-[180px] md:h-60 perspective cursor-pointer"
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
                        className="w-20 h-20 object-contain"
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
                            key={card.link}
                            src={mediaSrc}
                            alt={card.title}
                            className="w-full h-[150px] object-contain rounded-md"
                        />
                    )}

                    {/* VÍDEO */}
                    {flipped && card.type === "video" && (
                        <>
                            {isIframe ? (
                                <div className="relative w-full h-[150px] overflow-hidden rounded-md">
                                    <iframe
                                        key={card.link}
                                        src={mediaSrc}
                                        title={card.title}
                                        className="w-full h-[150px] rounded-md"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <video
                                    key={card.link}
                                    src={mediaSrc}
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-[150px] object-contain object-center rounded-md"
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
