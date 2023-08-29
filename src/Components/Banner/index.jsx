import styled from "styled-components";
import uno from "../../assets/Images/Banner/uno.jpg";
import { Tag } from "../Tag";
import { Title } from "../Title";
import { BannerContainer, PurpleBanner } from "../Containers";

const Img = styled.img`
  height: auto;
  width: 100%;
  display: flex;
  z-index: -1;
  position: absolute;
`;

const PrincipalVideo = styled.div`
  width: 620px;
  height: 353px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 2px solid white;
  background: url("https://hips.hearstapps.com/hmg-prod/images/athlete-doing-push-ups-in-gym-royalty-free-image-1599077740.jpg?crop=1xw:0.56138xh;center,top&resize=1200:*")
    center/cover no-repeat;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: -40px;
  font-size: 1rem;
  text-align: justify;
`;

export const Banner = () => {
  return (
    <PurpleBanner>
      <Img src={uno} />
      <BannerContainer>
        <div style={{ width: "60%" }}>
          <Tag>Pull</Tag>
          <Title>Challenge React</Title>
          <Description>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </Description>
        </div>
        <PrincipalVideo />
      </BannerContainer>
    </PurpleBanner>
  );
};
