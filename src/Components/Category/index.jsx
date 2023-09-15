import styled from "styled-components";
import Slider from "react-slick";
import { Tag } from "../Generals/Tag";
import { primaryColor, black } from "../UI/Variables";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { VideoContext } from "../../context";
import { Link } from "react-router-dom";

const HeadCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: auto;
`;
const PartCategory = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
`;
const AllCategory = styled.a`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.25rem;
  display: inline-block;
  position: relative;
  transition: all 0.4s ease;
  &:hover {
    color: ${primaryColor};
    transition: all 0.5s ease-out;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${({ theme }) => theme.text};
    transform-origin: bottom left;
    transition: transform 0.5s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
const ContainerSlider = styled.section`
  margin: 30px 70px;
  box-sizing: border-box;
`;
export const VideoText = styled.span`
  color: white;
  margin-bottom: 10px;
`;
export const TopCard = styled.div`
  height: 60%;
  width: 100%;
  background-color: ${black};
  transition: all 0.2s ease-in-out;
`;
export const Card = styled.div`
  width: 300px;
  height: 310px;
  flex-shrink: 0;
  padding: 0 15px;
  margin: 30px 0;
  cursor: pointer;
  &:hover {
    ${TopCard} {
      filter: brightness(66%);
    }
  }
`;
export const Video = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 1.5px solid;
  border-bottom: none;
`;
export const BotomCard = styled.div`
  height: 40%;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  background-color: ${black};
  border: 1px solid;
  border-top: none;
  overflow-y: scroll;
`;

export const Category = ({ title, category, color, muscle }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const colorVideo = `rgba(
    ${parseInt(color.slice(1, 3), 16)},
    ${parseInt(color.slice(3, 5), 16)},
    ${parseInt(color.slice(5, 7), 16)},
    0.8`;

  const showVideo = useContext(VideoContext);

  return (
    <ContainerSlider>
      <HeadCategory>
        <Tag style={{ background: color }}>{title}</Tag>
        <PartCategory>{muscle}</PartCategory>
        <Link to="/videos" style={{ marginLeft: "auto" }}>
          <AllCategory
            onClick={({}) => {
              showVideo.value(
                "",
                "",
                "",
                title,
                "",
                ""
              );
              console.log(showVideo.bannerVideo.title)
            }}
          >
            Ver todo
          </AllCategory>
        </Link>
      </HeadCategory>
      <Slider {...settings}>
        {category.map((video, i) => {
          return (
            <Card
              key={i}
              onClick={({}) => {
                showVideo.value(
                  video.image,
                  video.description,
                  video.title,
                  title,
                  color,
                  video.video
                );
              }}
            >
              <TopCard>
                <Video src={video.image} style={{ borderColor: colorVideo }} />
              </TopCard>
              <BotomCard style={{ borderColor: colorVideo }}>
                <VideoText style={{ fontWeight: "bold" }}>
                  {video.title}
                </VideoText>
                <VideoText>{video.description}</VideoText>
              </BotomCard>
            </Card>
          );
        })}
      </Slider>
    </ContainerSlider>
  );
};
