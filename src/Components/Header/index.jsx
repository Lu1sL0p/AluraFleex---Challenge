import styled from "styled-components";
import { Button } from "../Generals/Buttons";
import { LogoAlura } from "../Generals/Logo";

const Box = styled.header`
  height: 94px;
  width: 100%;
  padding: 25px 40px;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <Box>
      <LogoAlura />
      <Button>Nuevo Video</Button>
    </Box>
  );
};
