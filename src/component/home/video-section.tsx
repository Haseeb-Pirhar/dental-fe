"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// Shared tokens — pull these from your Navbar token file if you already
// export them there (e.g. `@/src/components/layout/Navbar`), so the whole
// site stays on one palette.
const TOKENS = {
  canvas: "#FFFFFF", // white background
  coral: "#FF6B5B", // CTA accent
  coralDark: "#E85444",
  teal: "#2FBFA6", // secondary accent
  tealSoft: "#CFF3EA",
  ink: "#12313A", // headline navy-teal
  slate: "#5C6B70", // body copy
};

interface VideoSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  posterSrc?: string;
  videoSrc?: string;
  statLabel?: string;
  statValue?: string;
}

export default function VideoSection({
  eyebrow = "Watch & Meet Us",
  title = "Discover the Dentrist Experience",
  subtitle = "See how we make every visit comfortable and effective",
  posterSrc = "",
  videoSrc = "/video/video.mp4",
  statLabel = "happy smiles",
  statValue = "2,000+",
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      className="relative overflow-hidden py-10 px-6"
      style={{ backgroundColor: TOKENS.canvas }}
    >
      {/* Mesh gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${TOKENS.coral} 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${TOKENS.teal} 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${TOKENS.tealSoft} 0%, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <span
          className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide uppercase"
          style={{
            backgroundColor: TOKENS.tealSoft,
            color: TOKENS.teal,
          }}
        >
          {eyebrow}
        </span>

        <h2
          className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
          style={{ color: TOKENS.ink }}
        >
          {title}
        </h2>
        <p
          className="mt-1.5 text-sm sm:text-base"
          style={{ color: TOKENS.slate }}
        >
          {subtitle}
        </p>

        {/* Video card */}
        <div className="relative mt-6 group">
          {/* glow ring behind the card */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.5rem] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
            style={{
              background: `linear-gradient(135deg, ${TOKENS.coral}55, ${TOKENS.teal}55)`,
            }}
          />

          <div className="relative aspect-video w-full  max-w-[1800px] h-[400px] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={videoSrc}
              poster={posterSrc || undefined}
              playsInline
              controls={false}
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Dark gradient wash for legibility, fades once playing */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10 transition-opacity duration-500 ${
                hasStarted && isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Center play button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hasStarted && isPlaying
                  ? "opacity-0 hover:opacity-100"
                  : "opacity-100"
              }`}
            >
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-md transition-transform duration-300 group-hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: "rgba(255,255,255,0.25)",
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.4) inset, 0 12px 30px rgba(0,0,0,0.25)`,
                }}
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${TOKENS.coral}, ${TOKENS.coralDark})`,
                  }}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" fill="currentColor" />
                  ) : (
                    <Play
                      className="h-6 w-6 translate-x-0.5"
                      fill="currentColor"
                    />
                  )}
                </span>
              </span>
            </button>

            {/* Mute toggle, only visible once playing */}
            {hasStarted && (
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition hover:scale-105"
                style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 text-white" />
                ) : (
                  <Volume2 className="h-4 w-4 text-white" />
                )}
              </button>
            )}

            {/* Floating stat badge, glassmorphism, echoes hero style */}
            <div
              className="absolute left-4 top-4 sm:left-6 sm:top-6 flex items-center gap-2 rounded-2xl px-4 py-2 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255,255,255,0.85)",
                boxShadow: "0 8px 24px rgba(18,49,58,0.12)",
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: TOKENS.coral }}
              />
              <p
                className="text-sm font-semibold"
                style={{ color: TOKENS.ink }}
              >
                {statValue}{" "}
                <span className="font-normal" style={{ color: TOKENS.slate }}>
                  {statLabel}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
