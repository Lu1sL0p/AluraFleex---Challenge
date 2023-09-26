import { v4 as uuidv4 } from "uuid";

const createCategory = async (title, description, color) => {
  try {
    console.log("Comenzando la creación de la categoría...");
    const response = await fetch("http://localhost:3000/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: uuidv4(), title, description, color }),
    });

    console.log("Solicitud HTTP completada...");
    if (!response.ok) {
      throw new Error("Error al crear la categoría");
    }

    const data = await response.json();
    console.log("Categoría creada con éxito:", data);
    return data;
  } catch (error) {
    console.error("Tas mal, pa", error);
    throw error;
  }
};

const detailCategory = async () =>
  fetch("http://localhost:3000/category").then((respuesta) => respuesta.json());

const deleteCategory = async (id) => {
  return fetch(`http://localhost:3000/category/${id}`, {
    method: "DELETE"
  })
}

export const clientCategory = {
  createCategory,
  detailCategory,
  deleteCategory
};

const createVideo = async (title, link, image, category, description) => {
  try {
    console.log("Comenzando la creación de la categoría...");
    const response = await fetch("http://localhost:3000/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: uuidv4(),
        title,
        link,
        image,
        category,
        description,
      }),
    });

    console.log("Solicitud HTTP completada...");
    if (!response.ok) {
      throw new Error("Error al crear la categoría");
    }

    const data = await response.json();
    console.log("Categoría creada con éxito:", data);
    return data;
  } catch (error) {
    console.error("Tas mal, pa", error);
    throw error;
  }
};

const detailVideo = async () =>
  fetch(" http://localhost:3000/video").then((respuesta) => respuesta.json());

export const clientVideo = {
  createVideo,
  detailVideo,
};
