import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.inside};
  padding: 50px 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryContainer = styled.fieldset`
  padding: 0;
  width: 100%;
  margin: 30px 0;
`;

export const BtnsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 40px;
    height: 54px;
`