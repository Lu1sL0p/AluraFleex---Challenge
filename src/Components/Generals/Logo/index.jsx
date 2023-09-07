import styled from "styled-components";
import Logo from "../../../assets/Images/Logo.png";

const Image = styled.img`
  height: 100%;
  width: auto;
  transition: all 0.16s ease-in-out;
  &:hover {
    transform: scale(1.047);
  }
`;

export const LogoAlura = () => {
  return (
    <a href="#" target="blank">
      <Image src={Logo} alt="Logo AluraFleex" />
    </a>
  );
};
