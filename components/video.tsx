"use client";
import { useState } from "react";
import { Container } from "./ui/container";
import { Play, X } from "lucide-react";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  
  return (
    <Container className="py-12">
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl group transition-all duration-500 hover:shadow-primary/20">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className={`relative cursor-pointer aspect-video bg-gradient-to-tr from-primary to-indigo-700 transition-all duration-700 ${
            playVideo ? "" : "hover:scale-[1.01]"
          }`}
        >
          {!playVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <button className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary lg:w-28 lg:h-28">
                <Play className="w-8 h-8 lg:w-12 lg:h-12 fill-current" />
                <span className="sr-only">Play Video</span>
                <span className="absolute inset-0 rounded-full animate-ping bg-white/40 -z-10 group-hover:hidden" />
              </button>
              <p className="text-white/90 text-lg font-bold tracking-wide uppercase group-hover:text-white transition-colors">
                Watch the story
              </p>
            </div>
          )}
          
          {playVideo && (
            <>
              <iframe
                src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=1&autoplay=1"
                title="Onlyface Presentation Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setPlayVideo(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Video;