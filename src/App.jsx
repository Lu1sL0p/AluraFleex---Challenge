import { useState } from "react";
import { darkTheme, lightTheme } from "./Components/UI/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Banner } from "./Components/Banner";
import { Category } from "./Components/Category";
import { Register } from "./Components/Register";
import { Videos } from "./Components/Videos";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { bdCategory, bdVideo } from "./bd";

function App() {
  const [theme, setTheme] = useState(true);

  const [categories, setCategories] = useState(bdCategory);
  const [datos, setDatos] = useState(bdVideo);
  const crearCategoria = (newCategory) => {
    setCategories([...categories, { ...newCategory }]);
  };
  const registerVideo = (video) => {
    setDatos([...datos, video]);
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                {categories.map((category, i) => (
                  <Category
                    key={i}
                    color={category.color}
                    title={category.title}
                    muscle={category.description}
                    category={datos.filter(
                      (card) => card.category === category.title
                    )}
                  />
                ))}
              </>
            }
          />
          <Route
            path="editcontent"
            element={
              <Register
                createCategory={crearCategoria}
                registerVideo={registerVideo}
                categories={categories.map((category) => category.title)}
              />
            }
          />
          <Route path="/videos" element={<Videos />}/>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
