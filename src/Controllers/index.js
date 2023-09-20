import { v4 as uuidv4 } from "uuid";

const createCategory = async (title, description, color) => {
  try {
    console.log("Comenzando la creación de la categoría...");
    const response = await fetch("https://api.jsonserver.io/content/categories", {
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

export const clientCategory = {
  createCategory,
};
