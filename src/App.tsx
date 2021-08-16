import Router from "./main/routes/router";
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './presentation/styles/GlobalStyles';
import {defaultTheme} from './presentation/styles/theme';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
