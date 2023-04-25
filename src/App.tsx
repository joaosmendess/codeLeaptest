import React from "react";

import MainScreen from './pages/MainScreen'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

export function App()  {
    return (
        <>
        <ThemeProvider theme={light}>
    <GlobalStyles/>
<MainScreen/>
</ThemeProvider>
    
    </>
    )
  }


  export default App;