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
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: "white", fontWeight: "bold" }}>
            Grupo Muscular
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
                  <Pen />
                  <Trash/>
                </Icons>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
