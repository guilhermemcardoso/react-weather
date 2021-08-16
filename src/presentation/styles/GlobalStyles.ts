import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        font-family: Roboto, Sans-Serif;
    }
    body {
        background: ${(props) => props.theme.colors.mainBackground};
        color: ${props => props.theme.colors.mainColor};        
    }
`;

export default GlobalStyles;