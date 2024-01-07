import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
//TODO import { loginUser } from "../ApiMethods";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (username === "" || password === "") {
      toast.error("Ingrese un nombre de usuario y una contraseña", {
        duration: 4000,
      });
      return;
    }

    //TODO Lógica para autenticar al usuario, puedes utilizar la función loginUser de mis API methods    

    //TODO lógica necesaria para autenticar al usuario, por ejemplo, redirección o almacenamiento del token de autenticación.

    toast.success("¡Inicio de sesión exitoso!", {
      duration: 4000,
    });

    toast.error("Error al iniciar sesión. Verifique sus credenciales.", {
      duration: 4000,
    });

    // Lógica de redirección después del inicio de sesión (si es necesario)
    history.push("/");
  }

  return (
    <div className="vh-100 flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-md shadow-md w-96">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Inicio de Sesión</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Nombre de Usuario
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ebbd51] text-white font-bold px-4 py-2 rounded-md hover:bg-[#ffcb50] focus:outline-none focus:ring focus:ring-[#d6c292] transition duration-200"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};
