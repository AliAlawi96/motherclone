import { useState } from "react";

export const MusicButton = () => {
    const audio = new Audio("../../public/Audio.mp3");
    const [playing, setPlaying] = useState(false);

    const start = () => {
        if (!playing) {
            audio.play();
        } else {
            audio.pause();
        }
        setPlaying(!playing);
    };

    return (
        <div
            className=" fixed bottom-4 right-8 bg-[#818181]/50 p-4 rounded-lg flex gap-4 text-white backdrop-blur-xs cursor-pointer pointer-events-auto"
            onClick={() => start()}
        >
            click me to play music
        </div>
    );
};
