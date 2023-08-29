import { useState } from "react";
import { darkTheme, lightTheme } from "./Components/UI/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Banner } from "./Components/Banner";
import { NewVideo } from "./Components/NewVideo";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Banner />
      {/* <NewVideo /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
