import { useState } from "react";
import { darkTheme, lightTheme } from "./Components/UI/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Banner } from "./Components/Banner";
import { NewVideo } from "./Components/Register/NewVideo";
import { Category } from "./Components/Category";
import { Videos } from "./db";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Banner/>
      {/* <NewVideo /> */}
      {/* <Category /> */}
      {Object.keys(Videos).map((category, i) => (
        <Category
          key={i}
          category={Videos[category].content}
          color={Videos[category].color}
          title={Videos[category].title}
        />
      ))}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
