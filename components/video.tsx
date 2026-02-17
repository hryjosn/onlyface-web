"use client";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { Container } from "./ui/container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Container className="py-12">
      <div className="group relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:shadow-primary/20">
        <div
          className={`relative aspect-video cursor-pointer bg-gradient-to-tr from-primary to-indigo-700 transition-all duration-700 ${
            playVideo ? "" : "hover:scale-[1.01]"
          }`}
          onClick={() => setPlayVideo(!playVideo)}
        >
          {!playVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <button className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary lg:h-28 lg:w-28">
                <Play className="h-8 w-8 fill-current lg:h-12 lg:w-12" />
                <span className="sr-only">Play Video</span>
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40 group-hover:hidden" />
              </button>
              <p className="font-bold text-lg text-white/90 uppercase tracking-wide transition-colors group-hover:text-white">
                Watch the story
              </p>
            </div>
          )}

          {playVideo && (
            <>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=1&autoplay=1"
                title="Onlyface Presentation Video"
              />
              <button
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  setPlayVideo(false);
                }}
              >
                <X className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
