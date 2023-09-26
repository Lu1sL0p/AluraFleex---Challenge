import styled from "styled-components";
import { clientCategory, clientVideo } from "../../Controllers";
import { Card } from "../Category";
import { CategoryContainer } from "../Generals/Containers";
import { useContext } from "react";
import { VideoContext } from "../../context";
import Pop from "../Popover";
import { useState, useEffect } from "react";

const Container = styled(CategoryContainer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  position: relative;
  background-image: url("https://images2.alphacoders.com/510/510978.jpg");
  background-size: cover;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    filter: brightness(0.5);
    z-index: -1;
  }
`;


export const Videos = () => {
  const showVideo = useContext(VideoContext);

  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientVideo.detailVideo();
        setDatos(data);
      } catch (error) {
        console.error("Error al obtener los datos de categoría:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        {datos
          .filter((video) => showVideo.bannerVideo.title === video.category)
          .map((video, i) => (
            <Card
              key={i}
              onClick={() =>
                console.log(showVideo.bannerVideo.title, video.category)
              }
            >
              <Pop
                description={video.description}
                image={video.image}
                title={video.title}
                color={""}
              />
            </Card>
          ))}
      </Container>
    </>
  );
};
