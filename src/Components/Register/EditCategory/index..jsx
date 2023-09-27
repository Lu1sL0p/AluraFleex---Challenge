import { useState, useEffect } from "react";
import { Input } from "../../Generals/Inputs";
import { Legend } from "../../Generals/Title";
import { Button, FreshButton } from "../../Generals/Buttons";
import { BtnsContainer, FormContainer } from "../../Generals/Containers";
import { validation } from "../../../validations";
import { clientCategory } from "../../../Controllers";
import { useParams } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

export const EditCategory = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState({
    title: {
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
  const manejarNuevaCategoría = (e) => {
    e.preventDefault();
  };

  const [category, setCategory] = useState({});
  const { id } = useParams();
  useEffect(() => {
    clientCategory.buscar(`/category/${id}`, (data) => {
      setTitle(data.title);
      setDescription(data.description);
      setColor(data.color);
      setCategory(data);
    });
  }, [id]);

  const [openSuccess, setOpenSuccess] = useState(false);
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };
  const [openFailure, setOpenFailure] = useState(false);
  const handleClickFailure = () => {
    setOpenFailure(true);
  };
  const handleCloseFailure = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFailure(false);
  };

  return (
    <FormContainer onSubmit={manejarNuevaCategoría} style={{ padding: "50px" }}>
      <Legend>Editar categoría</Legend>
      <Input
        fullWidth
        variant="outlined"
        margin="normal"
        label="Nombre"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setCategory((prevCategory) => ({
            ...prevCategory,
            title: e.target.value,
          }));
          setErrors(validation.titleValidation({ ...errors }, e.target.value));
        }}
        error={errors.title.error}
        helperText={errors.title.message}
        type="text"
      />
      <Input
        fullWidth
        label="Músculos a tener en cuenta"
        variant="outlined"
        margin="normal"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setCategory((prevCategory) => ({
            ...prevCategory,
            description: e.target.value,
          }));
          setErrors(
            validation.descriptionValidation({ ...errors }, e.target.value)
          );
        }}
        error={errors.description.error}
        helperText={errors.description.message}
        type="text"
      />
      <Input
        type="color"
        fullWidth
        margin="normal"
        label="Color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setCategory((prevCategory) => ({
            ...prevCategory,
            color: e.target.value,
          }));
        }}
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
        <FreshButton
          onClick={() => {
            clientCategory
              .updateCategory(category)
              .then((response) => {
                handleClickSuccess();
              })
              .catch((error) => {
                handleClickFailure();
              });
          }}
        >
          Editar
        </FreshButton>
        <Button
          onClick={() =>
            validation.handleClearCategory(
              setTitle,
              setDescription,
              setCode,
              setColor,
              setErrors
            )
          }
        >
          Limpiar
        </Button>
      </BtnsContainer>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Categoría editada con éxito
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFailure}
        autoHideDuration={3000}
        onClose={handleCloseFailure}
      >
        <Alert onClose={handleCloseFailure} severity="error">
          Ocurrió un error
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};
