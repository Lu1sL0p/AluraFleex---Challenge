import styled from "styled-components";
import { TextField, FormControl } from "@mui/material";
import { primaryColor, black } from "../UI/Variables";

export const Input = styled(TextField)`
  background-color: ${black};
  label {
    color: ${({ theme }) => theme.lightText};
  }
  fieldset {
    border-color: ${primaryColor};
    color: ${({ theme }) => theme.text};
  }
  div {
    color: ${({ theme }) => theme.text};
  }
`;

export const InputSelect = styled(FormControl)`
  background-color: ${black};
  label {
    color: ${({ theme }) => theme.lightText};
  }
  fieldset {
    border-color: ${primaryColor};
    color: ${({ theme }) => theme.text};
  }
`;
