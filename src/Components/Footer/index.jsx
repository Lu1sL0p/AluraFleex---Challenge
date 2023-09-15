import styled from "styled-components";
import { LogoAlura } from "../Generals/Logo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { primaryColor } from "../UI/Variables";
import { Link } from "react-router-dom";
import { texto, texto2 } from "../../context";
import YouTubeVideo from "../YouTubeVideo";

const Box = styled.footer`
  height: auto;
  width: 100%;
  padding: 25px 40px;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-top: 1px solid ${primaryColor};
`;
const SpanActive = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HoverIcon = styled.div`
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.15);
  }
`;

export const Footer = () => {
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
      <IconBox>
        <SpanActive>Created by: Luis López</SpanActive>
        <HoverIcon>
          <a href="https://github.com/Lu1sL0p" target="blank">
            <GitHubIcon sx={{ fontSize: 35, color: "white" }} />
          </a>
        </HoverIcon>
        <HoverIcon>
          <a
            href="https://www.linkedin.com/in/luisendl-b80aa4250/"
            target="blank"
          >
            <LinkedInIcon sx={{ fontSize: 40, color: "white" }} />
          </a>
        </HoverIcon>
        <HoverIcon>
          <a
            href="https://lu1sl0p.github.io/LuisLopez-Portfolio/"
            target="blank"
          >
            <FolderSharedIcon sx={{ fontSize: 41, color: "white" }} />
          </a>
        </HoverIcon>
      </IconBox>
    </Box>
  );
};
