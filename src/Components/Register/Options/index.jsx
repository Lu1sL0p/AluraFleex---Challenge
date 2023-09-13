import styled from "styled-components";
import { Select, MenuItem, InputLabel, Menu } from "@mui/material";
import { InputSelect } from "../../Generals/Inputs";


const List = styled(Select)`
  div {
    color: white;
  }
`;

export const Options = ({ categories, value, updateCategory }) => {
  const handleChange = (e) => {
    updateCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <InputSelect fullWidth>
        <InputLabel>Categoría</InputLabel>
        <List value={value} onChange={handleChange}>
          <MenuItem value="" disabled defaultValue="" hidden>
            Seleccione una categoría
          </MenuItem>
          {categories.map((category, i) => (
            <MenuItem key={i} value={category}>
              {category}
            </MenuItem>
          ))}
        </List>
      </InputSelect>
    </>
  );
};
