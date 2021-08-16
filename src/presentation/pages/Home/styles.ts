import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  height: 10vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  text-align: center;
  height: 5vh;
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fonts.label};
`;
