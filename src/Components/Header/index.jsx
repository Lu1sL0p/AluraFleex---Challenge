import styled from "styled-components";
import { Button } from "../Generals/Buttons";
import { LogoAlura } from "../Generals/Logo";
import { primaryColor } from "../UI/Variables";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { VideoContext } from "../../context";
import { texto, texto2 } from "../../context";
import YouTubeVideo from "../YouTubeVideo";

const Box = styled.header`
  height: 94px;
  width: 100%;
  padding: 25px 40px;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${primaryColor};
`;

export const Header = ({}) => {
  const location = useLocation();
  const showVideo = useContext(VideoContext);

  return (
    <Box>
      <Link
        to="/"
        onClick={({}) => {
          showVideo.value(
            YouTubeVideo,
            texto,
            texto2,
            "Motivación",
            "#8a2ce280",
            "O_i7qReBPT8"
          );
        }}
      >
        <LogoAlura />
      </Link>
      {location.pathname !== "/editcontent" && (
        <Link to="/editcontent">
          <Button>Editar contenido</Button>
        </Link>
      )}
    </Box>
  );
};
