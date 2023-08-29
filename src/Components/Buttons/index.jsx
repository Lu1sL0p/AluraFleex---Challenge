import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 0.9rem;
  letter-spacing: 0.02857em;
  padding: 5px 15px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid #ffffff7f;
  transition: all 0.16s ease-in-out;
  height: 100%;
  width: 180px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid white;
    transform: scale(1.047);
  }
`;

export const FreshButton = styled(Button)`
  background: linear-gradient(129deg, #9f0efd 25%, #3c77fb 100%);
  height: 100%;
  width: 180px;
  border: 1px solid black;
`;
