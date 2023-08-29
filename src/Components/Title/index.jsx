import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  padding-bottom: 50px;
  font-size: 3rem;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 30px;
  font-size: 3rem;
`;