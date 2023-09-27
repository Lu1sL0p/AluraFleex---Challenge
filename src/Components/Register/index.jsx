import { useState } from "react";
import styled from "styled-components";
import { NewCategory } from "./NewCategory/index.";
import { NewVideo } from "./NewVideo";
import { FreshButton } from "../Generals/Buttons";
import { CategoryContainer } from "../Generals/Containers";
import { TableContent } from "./TableContent";

const CategoryBtn = styled(FreshButton)`
  width: 250px;
  height: 54px;
  margin: -54px 0 50px;
  display: flex;
  z-index: 200;
`;

export const Register = ({ categories, muscle, id }) => {
  const [register, setRegister] = useState({
    state: true,
    text: "Nueva Categoría",
  });

  const handleRegister = () => {
    setRegister({
      state: !register.state,
      text: register.state ? "Nuevo  Video" : "Nueva Categoría",
    });
  };

  return (
    <CategoryContainer>
      {register.state ? <NewVideo categories={categories} /> : <NewCategory />}
      <CategoryBtn
        style={{ marginLeft: "auto" }}
        onClick={() => handleRegister()}
      >
        {register.text}
      </CategoryBtn>
      {register.state ? (
        <></>
      ) : (
        <TableContent categories={categories} muscle={muscle} id={id} />
      )}
    </CategoryContainer>
  );
};
