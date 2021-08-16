import styled from "styled-components";

interface ButtonProps {
    isSelected: boolean
}

export const Button = styled.button<ButtonProps>`
  font-size: ${({ theme }) => theme.fonts.label};
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.secondaryBackGround : theme.colors.mainColor};
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.secondaryColor : theme.colors.secondaryBackGround};
  border-color: ${({ theme, isSelected }) => isSelected ? theme.colors.secondaryColor : theme.colors.secondaryBackGround};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 30px;
  width: 150px;
  margin: ${({ theme }) => theme.margin};
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    width: 100px;
  }
`;