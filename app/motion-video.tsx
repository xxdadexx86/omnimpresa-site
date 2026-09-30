"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Props = {
  slug: string;
  title: string;
  paused?: boolean;
  controls?: boolean;
};

/** Decode only videos in view. Posters are the reduced-motion and playback-error fallback. */
export function MotionVideo({ slug, title, paused, controls = false }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      const stop =
        (paused ?? userPaused ?? preference.matches) ||
        !visible ||
        document.hidden;
      if (stop) {
        video.pause();
        return;
      }
      if (!video.getAttribute("src")) {
        video.src = `/assets/videos/${slug}-footage.mp4`;
        video.load();
      }
      void video.play().catch(() => {
        /* Keep the poster when autoplay is unavailable. */
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      video.pause();
    };
  }, [slug, paused, userPaused]);

  return (
    <>
      <video
        ref={videoRef}
        className="division-video"
        muted
        loop
        playsInline
        preload="none"
        poster={`/assets/videos/${slug}-poster.jpg`}
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {controls ? (
        <button
          className="video-toggle"
          type="button"
          aria-label={`${playing ? "Metti in pausa" : "Riproduci"} il video ${title}`}
          onClick={() => setUserPaused(playing)}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          <span>{playing ? "Pausa" : "Riproduci"}</span>
        </button>
      ) : null}
    </>
  );
}
