import { useContext } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Tag } from "../Generals/Tag";
import { primaryColor } from "../UI/Variables";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideoContext } from "../../context";
import { Link } from "react-router-dom";
import Pop from "../Popover";

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
  font-style: italic;
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
export const Card = styled.div`
  width: 300px;
  height: auto;
  flex-shrink: 0;
  padding: 0 15px;
  margin: 30px 0 0;
  cursor: pointer;
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
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
  const showVideo = useContext(VideoContext);

  return (
    <ContainerSlider>
      <HeadCategory>
        <Tag style={{ background: color }}>{title}</Tag>
        <PartCategory>{muscle}</PartCategory>
        <Link to="/videos" style={{ marginLeft: "auto" }}>
          <AllCategory
            onClick={({}) => {
              showVideo.value("", "", "", title, "", "");
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
              <Pop
                description={video.description}
                image={video.image}
                color={color}
                title={video.title}
              />
            </Card>
          );
        })}
      </Slider>
    </ContainerSlider>
  );
};
