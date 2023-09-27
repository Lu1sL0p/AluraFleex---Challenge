import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { BsTrashFill, BsPencilFill } from "react-icons/bs";
import styled from "styled-components";
import { clientCategory } from "../../../Controllers";
import { Link } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const Trash = styled(BsTrashFill)`
  color: #ffffff;
  transform: scale(1.5);
  transition: all 0.25s ease-in-out;
  &:hover {
    color: #686868;
  }
`;
const Pen = styled(BsPencilFill)`
  color: #ffffff;
  transform: scale(1.5);
  transition: all 0.25s ease-in-out;
  &:hover {
    color: #686868;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TableContent = ({ categories, muscle, id }) => {
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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>
            Categoría{" "}
          </TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>
            Enfoque en
          </TableCell>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories.map((category, i) => {
          return (
            <TableRow key={i}>
              <TableCell sx={{ color: "white" }}>{category}</TableCell>
              <TableCell sx={{ color: "white" }}>{muscle[i]}</TableCell>
              <TableCell sx={{ color: "white" }}>
                <Icons>
                  <Link to={`/editCategory/${id[i]}`} elememt>
                    <Pen />
                  </Link>
                  <Trash
                    onClick={() => {
                      clientCategory
                        .deleteCategory(id[i])
                        .then(() => {
                          handleClickSuccess();
                        })
                        .catch((error) => {
                          handleClickFailure();
                        });
                    }}
                  />
                </Icons>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Categoría eliminada con éxito
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
    </Table>
  );
};
