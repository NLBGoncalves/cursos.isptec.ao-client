import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";

type Props = {};

interface YouTubeVideoProps {
    videoId: string;
    width?: number;
    height?: number;
}

const Presentation: React.FC<YouTubeVideoProps> = ({ videoId, width = 800, height = 500 }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
  <div className="">
      <div className="w-[90%] 800px:w-[80%] m-auto">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Entenda como funciona a nossa plataforma! 
            <br />
            <span className="text-gradient">Clique no Play e Assista a Apresentação</span>
          </h3>
          <br />
          <br />
        <div style={{position:"relative", paddingTop:"56.25%", overflow:"hidden"}}>
      <iframe
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
        </iframe>
        </div>
        </div>
        <br />
        <br />
  </div>
  );
};

export default Presentation ;