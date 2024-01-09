import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
//TODO import { loginUser } from "../ApiMethods";

// eslint-disable-next-line react/prop-types
export const Login = ({ onLogin }) => {
  const navigate = useNavigate(); 
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

    // Verificación hardcodeada de usuario y contraseña
    if (username === "test@test.com" && password === "test123") {
      toast.success("¡Inicio de sesión exitoso!", {
        duration: 4000,
      });

      onLogin();
      navigate('/');
    } else {
      toast.error("Error al iniciar sesión. Verifique sus credenciales.", {
        duration: 4000,
      });
    }
  }

  return (
    <div className="vh-100 flex justify-center items-center ">
      <div className="bg-gray-200 p-6 rounded-md shadow-md hover:shadow-lg w-96 transition duration-300 transform hover:scale-100">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Inicio de Sesión</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              id="username"
              placeholder="Ingrese su email"
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
              placeholder="********"
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
