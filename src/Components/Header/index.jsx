import styled from "styled-components";
import { Button } from "../Generals/Buttons";
import { LogoAlura } from "../Generals/Logo";
import { primaryColor } from "../UI/Variables";
import { Link, useLocation } from "react-router-dom";

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

  return (
    <Box>
      <Link to="/">
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
