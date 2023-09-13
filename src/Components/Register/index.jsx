import styled from "styled-components";
import { NewCategory } from "./NewCategory/index.";
import { NewVideo } from "./NewVideo";
import { FreshButton } from "../Generals/Buttons";
import { CategoryContainer } from "../Generals/Containers";
import { useState } from "react";


const CategoryBtn = styled(FreshButton)`
  width: 250px;
  height: 54px;
  margin-top: -54px;
  display: flex;
  z-index: 200;
`;

export const Register = ({createCategory, registerVideo, categories}) => {
  const [register, setRegister] = useState({
    state: true,
    text: "Nueva Categoría"
  })

  const handleRegister = () => {
    setRegister({
      state: !register.state,
      text: register.state ? "Nuevo  Video" : "Nueva Categoría"
    })
  }

  return (
    <CategoryContainer>
      {register.state ? <NewVideo registerVideo={registerVideo} categories={categories}/> : <NewCategory createCategory={createCategory}/>}
      <CategoryBtn style={{ marginLeft: "auto" }} onClick={() => handleRegister()}>{register.text}</CategoryBtn>
    </CategoryContainer>
  );
};
