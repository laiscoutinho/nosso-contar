import React from "react";

import { Play } from "lucide-react";

import PlayCard from "../../../components/PlayCard/index"
import Button from "../../../components/Button/index";


const PlayGameView = () => {

    return (
        <div>
            <div className="mt-6 z-10 flex justify-center w-full">
                <Button
                    icon={<Play className="w-60 h-20 text-(--white-soft)" />}
                    bgColor="bg-(--pink-strong)"
                >
                    JOGAR
                </Button>
            </div>
            <PlayCard />
        </div>
    );
};

export default PlayGameView;