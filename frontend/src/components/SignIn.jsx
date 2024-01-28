import { AppContext } from "./AppContext";
import { useState } from "react";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(e) {
    try {
      e.preventDefault();

      // lógica para manejar el inicio de sesión

      AppContext.dispatch({
        type: "setIsLoggedIn",
        payload: true,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="vh-100 flex justify-center items-center ">
      <div className="bg-gray-200 p-6 rounded-md shadow-md hover:shadow-lg w-96 transition duration-300 transform hover:scale-100">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Registro</h3>
        </div>
        <form action="submit" onSubmit={(e) => handleSignIn(e)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Nombre de Usuario
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
              placeholder="********"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ebbd51] text-white font-bold px-4 py-2 rounded-md hover:bg-[#ffcb50] focus:outline-none focus:ring focus:ring-[#d6c292] transition duration-200"
            >
              Registrarse
            </button>
            <p className="mt-4 text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="underline">
                Inicia Sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
