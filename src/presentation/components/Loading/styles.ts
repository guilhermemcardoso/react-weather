import styled from "styled-components";

export const Label = styled.div`
  font-size: ${({ theme }) => theme.fonts.label};
  color: ${({ theme }) => theme.colors.labelColor};
  margin: ${({ theme }) => theme.margin};
`;