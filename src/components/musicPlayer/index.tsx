"use client";

import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeLow } from "react-icons/fa6";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);
  const MAX_VOLUME = 20;

  const handleTogglePlay = (): void => {
    if (isPlaying) {
      musicRef.current?.pause();
      setIsPlaying(false);
    } else {
      musicRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeSlide = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const volume = +value / MAX_VOLUME;
    if (musicRef.current) musicRef.current.volume = volume;
  };

  return (
    <div className="mx-auto my-8 flex h-full max-h-64 w-11/12 flex-col items-center justify-around rounded-3xl bg-white/10 text-[var(--text-main)] backdrop-blur-lg">
      <h3 className="text-xl">Try this short piece of music</h3>
      <span className="-mt-8 font-thin">Chainsaw Man - Reze Movie theme</span>
      <button type="button" className="h-16 w-16" onClick={handleTogglePlay}>
        {isPlaying ? (
          <FaPause className="h-full w-full animate-[pulse_0.3s_ease-in_1]" />
        ) : (
          <FaPlay className="h-full w-full animate-[pulse_0.3s_ease-in_1]" />
        )}
      </button>

      <div className="flex w-full items-center gap-4 px-4">
        <label htmlFor="volume">
          <FaVolumeLow />
        </label>
        <input
          className="w-full cursor-pointer"
          title="volume"
          id="volume"
          type="range"
          min={0}
          max={MAX_VOLUME}
          onChange={(e) => handleVolumeSlide(e)}
        />
        <label htmlFor="volume">
          <FaVolumeHigh />
        </label>
      </div>

      <audio
        ref={musicRef}
        src="chm-reze-movie.mp3"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
