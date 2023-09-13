import YouTube from "react-youtube";
import { useContext, useState, useEffect } from "react";
import { VideoContext } from "../../context";

const opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    controls: 1,
    autoplay: 1,
    rel: 0,
  },
};

function YouTubeVideo() {
  const showVideo = useContext(VideoContext);
  const url = showVideo.bannerVideo.video;
  const [videoId, setVideoId] = useState(url);

  useEffect(() => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|watch)\/|.*[?&]v=|.*[?&]vi=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    if (match) {
      setVideoId(match[1]);
    }
  }, [url]);

  return <YouTube videoId={videoId} opts={opts} />;
}

export default YouTubeVideo;
