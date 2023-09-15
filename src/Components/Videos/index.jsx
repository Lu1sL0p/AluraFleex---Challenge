import styled from "styled-components";
import { bdVideo } from "../../bd";
import { Card, TopCard, BotomCard, Video, VideoText } from "../Category";
import { CategoryContainer } from "../Generals/Containers";
import { useContext } from "react";
import { VideoContext } from "../../context";

const Container = styled(CategoryContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Videos = () => {
   const showVideo = useContext(VideoContext);

   return (
      <Container>
        {bdVideo
          .filter((video) => showVideo.bannerVideo.title === video.category)
          .map((video, i) => (
            <Card key={i} onClick={() => console.log(showVideo.bannerVideo.title, video.category)}>
              <TopCard>
                <Video src={video.image} style={{}} />
              </TopCard>
              <BotomCard style={{}}>
                <VideoText style={{ fontWeight: "bold" }}>
                  {video.title}
                </VideoText>
                <VideoText>{video.description}</VideoText>
              </BotomCard>
            </Card>
          ))}
      </Container>
    );
};
