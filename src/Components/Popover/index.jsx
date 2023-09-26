import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { black } from "../UI/Variables";
import styled from "styled-components";

const VideoText = styled.span`
  color: white; 
  font-size: 1.25rem;
  margin-top: 15px;
  display: flex;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.color}; 
  }
`;
export const TopCard = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 15px;
`;
export const Video = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 1.5px solid white;
  position: relative;
  overflow: hidden;
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    filter: brightness(0.5);
  }
`;

export default function Pop({ image, description, color, title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const colorVideo = `rgba(
    ${parseInt(color.slice(1, 3), 16)},
    ${parseInt(color.slice(3, 5), 16)},
    ${parseInt(color.slice(5, 7), 16)},
    0.8`;

  return (
    <div style={{ height: "auto" }}>
      <div
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {
          <TopCard>
            <Video src={image} style={{ borderColor: colorVideo }} />
            <VideoText color={color}>{title}</VideoText>
          </TopCard>
        }
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography
          sx={{
            p: 1,
            backgroundColor: `${black}`,
            color: "#ffffff",
            maxWidth: "400px",
            marginTop: "auto",
          }}
        >
          {description}
        </Typography>
      </Popover>
    </div>
  );
}
