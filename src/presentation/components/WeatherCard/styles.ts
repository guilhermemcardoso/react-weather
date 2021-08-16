import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondaryBackGround};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin};
  padding: ${({ theme }) => theme.padding};
  min-width: 180px;

  @media only screen and (max-width: 768px) {
    width: 80%;
    padding: ${({ theme }) => theme.paddingLarge};
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.margin};
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.margin};
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.margin};
  font-size: ${({ theme }) => theme.fonts.title};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Label = styled.div`
  font-size: ${({ theme }) => theme.fonts.label};
  margin-bottom: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.colors.labelColor};
`;

export const TwoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.margin};
`;

export const TwoItem = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
