 "use client";

import { useState } from "react";
import { PiVinylRecordFill } from "react-icons/pi";
import styled from "styled-components";

const Player = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    return (
        <PlayerButton>
            <button onClick={()=> setIsPlaying(!isPlaying)}>
                {isPlaying ? "일시정지" : "재생"}
            </button>
            <PiVinylRecordFill /><span>Player</span>
        </PlayerButton>
    )
}

export default Player;

const PlayerButton = styled.div`
    position: fixed;
    right: 4px;
    bottom: 10vh;
    width: auto;
    padding: 6px 14px;
    border-radius: 6px;
    border: 2px solid #ECCFA3;
    font-size: 24px;
    letter-spacing: 2px;
    color: #ECCFA3;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`