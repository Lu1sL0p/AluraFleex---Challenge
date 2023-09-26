import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../Generals/Inputs";
import { Legend } from "../../Generals/Title";
import { FreshButton, Button } from "../../Generals/Buttons";
import { FormContainer, BtnsContainer } from "../../Generals/Containers";
import { validation } from "../../../validations";
import { Options } from "../Options";
import { clientVideo } from "../../../Controllers";

const CleanBtn = styled(Button)`
  height: 54px;
  width: 180px;
`;

export const NewVideo = ({ categories }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const [errors, setErrors] = useState({
    title: {
      error: false,
      message: "",
    },
    link: {
      error: false,
      message: "",
    },
    image: {
      error: false,
      message: "",
    },
    description: {
      error: false,
      message: "",
    },
    code: {
      error: false,
      message: "",
    },
  });

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        clientVideo.createVideo(title, link, image, category, description).then(() => {
          console.log("Registrado en la BD")
        }).catch((err) => {
          console.log("El error es: ", err)
        })
      }}
    >
      <Legend>Nuevo video</Legend>
      <Input
        fullWidth
        label="Título del video"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setErrors(validation.titleValidation({ ...errors }, e.target.value));
        }}
        error={errors.title.error}
        helperText={errors.title.message}
        type="text"
      />
      <Input
        fullWidth
        label="Link del video"
        variant="outlined"
        margin="normal"
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
          setErrors(validation.urlValdiation({ ...errors }, e.target.value));
        }}
        error={errors.link.error}
        helperText={errors.link.message}
      />
      <Input
        fullWidth
        label="Link de la imagen video"
        variant="outlined"
        margin="normal"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
          setErrors(validation.imageValidation({ ...errors }, e.target.value));
        }}
        error={errors.image.error}
        helperText={errors.image.message}
      />
      <Options categories={categories} value={category} updateCategory={setCategory}/>
      <Input
        fullWidth
        label="Descripción"
        variant="outlined"
        margin="normal"
        multiline
        rows={5}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setErrors(
            validation.descriptionValidation({ ...errors }, e.target.value)
          );
        }}
        error={errors.description.error}
        helperText={errors.description.message}
        type="text"
      />
      <Input
        fullWidth
        label="Código de seguridad"
        variant="outlined"
        margin="normal"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          setErrors(validation.codeValidation({ ...errors }, e.target.value));
        }}
        error={errors.code.error}
        helperText={errors.code.message}
        type="number"
      />

      <BtnsContainer>
        <FreshButton>Guardar</FreshButton>
        <CleanBtn
          onClick={() =>
            validation.handleClearVideo(
              setTitle,
              setLink,
              setImage,
              setDescription,
              setCode,
              setErrors
            )
          }
        >
          Limpiar
        </CleanBtn>
      </BtnsContainer>
    </FormContainer>
  );
};
