import styled from "styled-components";
import uno from "../../assets/Images/Banner/uno.jpg";
import { Tag } from "../Generals/Tag";
import { Title } from "../Generals/Title";
import { useContext } from "react";
import { VideoContext } from "../../context";
import YouTubeVideo from "../Video";

const Img = styled.img`
  height: auto;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: -1;
`;
const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 40px 65px;
  gap: 50px;
  width: 100%;
  height: auto;
`
const Description = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: -20px;
  font-size: 1.2rem;
  text-align: justify;
`;
const PrincipalVideo = styled.div`
width: 540px;
height: 308px;
flex-shrink: 0;
border-radius: 5px;
border: 4px solid;
margin-top: 130px;
`;

export const Banner = () => {
  const showVideo = useContext(VideoContext);

  return (
    <>
      <Img src={uno} />
      <BannerContainer>
        <div style={{ width: "80%", alignSelf: "flex-start"}}>
          <Tag style={{backgroundColor: showVideo.bannerVideo.color }}>{showVideo.bannerVideo.title}</Tag>
          <Title>{showVideo.bannerVideo.titleVideo}</Title>
          <Description>{showVideo.bannerVideo.description}</Description>
        </div>
        <PrincipalVideo style={{borderColor: showVideo.bannerVideo.color}}>
         <YouTubeVideo />
        </PrincipalVideo>
      </BannerContainer>
    </>
  );
};
