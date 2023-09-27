import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./Components/UI/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Banner } from "./Components/Banner";
import { Register } from "./Components/Register";
import { Videos } from "./Components/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { clientCategory, clientVideo } from "./Controllers";
import { Category } from "./Components/Category";
import { EditCategory } from "./Components/Register/EditCategory/index.";

function App() {
  const [theme, setTheme] = useState(true);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientCategory.detailCategory();
        setCategories(data);
      } catch (error) {
        console.error("Error al obtener los datos de categoría:", error);
      }
    };

    fetchData();
  }, []);

  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientVideo.detailVideo();
        setDatos(data);
      } catch (error) {
        console.error("Error al obtener los datos de categoría:", error);
      }
    };

    fetchData();
  }, []);

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
                {categories.map(({ id, title, description, color }) => (
                  <Category
                    key={id}
                    color={color}
                    title={title}
                    muscle={description}
                    category={datos.filter((card) => card.category === title)}
                  />
                ))}
              </>
            }
          />
          <Route
            path="editcontent"
            element={
              <Register
                categories={categories.map(({ title }) => title)}
                muscle={categories.map(({ description }) => description)}
                id={categories.map(({ id }) => id)}
              />
            }
          />
          <Route path="/videos" element={<Videos />} />
          <Route path="/editCategory/:id" element={<EditCategory />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
