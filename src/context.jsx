import { createContext, useState } from "react";
import YouTubeVideo from "./Components/YouTubeVideo";


export const VideoContext = createContext();

export const VideoToShow = ({ children }) => {
  const texto = (
    <span>
      <span style={{color: "#9F0EFD"}}>AluraGym</span> es un sitio en el cual podrás encontrar video relacionados con
      el mundo fitness. Tanto si eres principiante como si eres avanzado,
      encontrarás recursos que te ayuradarán y/o inspirarán para alcanzar ese
      cuerpo que tanto deseas. <br></br> <br></br>
    </span>
  );

  const texto2 = (
    <span>
      ¿Qué esperas?, el mejor día para comenzar fue <span style={{color: "red"}}>ayer</span>; el segundo mejor, es
      <span style={{color: "#239230"}}> hoy</span>.
    </span>
  );

  const [bannerVideo, setBannerVideo] = useState({
    image: YouTubeVideo,
    description: texto,
    titleVideo: texto2,
    title: "Motivación",
    color: "#8a2ce280",
    video: "O_i7qReBPT8"
  });

  const value = {
    bannerVideo,
    value(image, description, titleVideo, title, color, video) {
      setBannerVideo({
        image,
        description,
        titleVideo,
        title,
        color, 
        video
      });
    },
  };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};
