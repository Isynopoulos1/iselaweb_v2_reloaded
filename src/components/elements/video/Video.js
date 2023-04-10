import React from "react";

// IMPORT STYLES
import { VideoContainer, MainVideo } from "./Video.styles";

const Video = () => {
  return (
    <VideoContainer>
      <MainVideo
        id="video"
        src="https://ik.imagekit.io/ppayaz/iselalarcon/home/main_video_iselaweb_b90NrX4S1.mp4?updatedAt=1653900920001"
        autoPlay
        muted
        loop
      />
    </VideoContainer>
  );
};

export default Video;
