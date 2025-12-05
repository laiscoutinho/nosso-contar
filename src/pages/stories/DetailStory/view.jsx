import stories from "../../../service/storiesCard.json";
import { Hand, Play } from "lucide-react"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


import WaveBackground from "../../../components/WaveBackground/index";
import EndingTitle from "../../../components/EndingTitle/index";

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

const StoryDetailView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const story = stories.find(item => item.id === Number(id));
    const video = { link: story.linkVideo };
    const legendas = story.legenda;

    const playerRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (!video?.link || !buildVideoSrc(video.link)) return;

        // só carrega o script 1 vez
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        }

        // API pronta → cria o player
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("video-frame", {
            events: {
                onReady: () => {
                // loop pegando tempo
                const interval = setInterval(() => {
                    if (playerRef.current?.getCurrentTime) {
                    setCurrentTime(playerRef.current.getCurrentTime());
                    }
                }, 300);

                // evita loop infinito caso o componente desmonte
                return () => clearInterval(interval);
                }
            }
            });
        };
    }, [video]);


    const legendaAtual = legendas.find(
        (l) => currentTime >= l.start && currentTime <= l.end
    );

    return (
        <>
            <main className="relative h-auto ml:h-[80vh] mb-0 px-6 md:px-10 pt-12 pb-8 
                    bg-(--white-soft) 
                    text-start 
                    flex flex-col items-start justify-center gap-7 md:gap-10 
                    layout-margin
                    overflow-hidden
                ">

                <div className=" w-full flex items-start space-between gap-6 md:gap-12 flex-nowrap ">
                    <div className='flex flex-col flex-nowrap'>
                        {/* Título */}
                        <h2 className="
                            text-base sm:text-2xl md:text-4xl 
                            font-bold leading-tight
                            max-w-full text-left
                        ">
                            História:
                            <span className="text-(--pink-strong)"> {story.titulo} </span>
                        </h2>

                        <h3 className="
                            text-sm sm:text-xl md:text-2xl 
                            mt-1 leading-tight
                            max-w-full text-left
                        ">
                            <span> {story.descricao} </span>
                        </h3>
                    </div>
                </div>
            </main>

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
                <div className="w-full flex flex-col-reverse lg:flex-row gap-6 items-stretch">
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
                    >
                        <h3 className="text-lg font-bold mb-3 text-(--dark)">
                            Outras histórias
                        </h3>

                        <div className="flex flex-col gap-3">

                            {stories.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => navigate(`/historias/${item.id}`)}
                                    className={`
                                        p-3 rounded-xl cursor-pointer transition flex items-center justify-between gap-3
                                        ${item.id === Number(id)
                                            ? "bg-(--pink-soft) border border-(--pink-light)"
                                            : "hover:bg-(--aqua-light)"
                                        }
                                    `}
                                >
                                    <p className="flex text-base font-semibold text-(--dark)">
                                        <Play className="w-3 sm:w-4 h-3 sm:h-5 mr-2 mt-0.5 text-(--pink-strong)" />
                                        {item.titulo}
                                    </p>

                                    <span className="text-sm font-semibold text-(--pink-strong)">
                                        {item.duracao}
                                    </span>
                                </div>

                            ))}

                        </div>
                    </div>
                    <div
                        className="
                            w-full lg:w-3/4
                            bg-black
                            rounded-2xl
                            overflow-hidden
                            shadow-md
                            aspect-video
                            max-h-[800px]
                            relative
                        "
                        >
                        {video?.link ? (
                            <>
                            <iframe
                                id="video-frame"
                                className="w-full h-full"
                                src={`${buildVideoSrc(video.link)}?enablejsapi=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            {/* Legenda por cima */}
                            {legendaAtual && (
                                <div className="
                                    absolute bottom-4 left-1/2 -translate-x-1/2
                                    bg-black/60 text-white px-4 py-2
                                    rounded-xl text-lg max-w-[80%] text-center
                                ">
                                    {legendaAtual.text}
                                </div>
                                )}

                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white">
                            Vídeo não encontrado
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <WaveBackground offset="-mt-[40px]" />

            <EndingTitle />
        </>
    )
}

export default StoryDetailView;