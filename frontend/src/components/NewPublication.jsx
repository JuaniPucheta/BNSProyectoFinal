import { useState } from "react";
import { createPublication } from "../api/publications";
import { toast, Toaster } from "react-hot-toast";

export const NewPublication = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || description === "") {
      toast.error("Ingrese el título y descripción de la publicación", {
        duration: 4000,
      });
      return;
    }

    await createPublication({
      title: title,
      description: description,
      image: imageUrl,
    });

    toast.success(
      <div className="toast">
        <p className="text-green-500 font-semibold">
          ¡Publicación creada!
        </p>
        <a href="/" className="text-blue-500 hover:underline cursor-pointer">
          Volver al Inicio
        </a>
      </div>
    );
  }

  return (
    <div className="vh-100 flex justify-center items-center"> 
      <div className="bg-gray-200 p-6 rounded-md shadow-md mx-auto my-20 w-96">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Crear nueva publicación</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Título de la publicación
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Descripción
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image-url" className="block text-sm font-medium text-gray-600">
              URL de la imagen
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              id="image-url"
              onChange={(e) => setImageUrl(e.target.value)}
              title="Copie y pegue la URL de la imagen que desea usar"
            />
          </div>
      <div className="text-center">
        <button type="submit" className="bg-[#ebbd51] text-white font-bold px-4 py-2 rounded-md hover:bg-[#ffcb50] focus:outline-none focus:ring focus:ring-[#d6c292] transition duration-200">
        Crear publicación
        </button>
      </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};
