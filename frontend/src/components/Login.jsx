import { logIn } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();

	async function handleLogIn(e) {
    
    try {
      e.preventDefault();
      
      const response = await logIn({
        user: e.target.username.value,
        password: e.target.password.value,
      });

      if (response.token && response.userId) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.userId);
        localStorage.setItem("user", response.userName);
        navigate(0);
      }
    } catch (error) {
      toast.error(error.message);
    }

	}
  return (
    <>
      <div className="vh-100 flex justify-center items-center ">
        <div className="bg-gray-200 p-6 rounded-md shadow-md hover:shadow-lg w-96 transition duration-300 transform hover:scale-100">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Inicio de Sesión</h3>
          </div>
          <form action='submit' onSubmit={(e) => handleLogIn(e)}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Nombre de Usuario
              </label>
              <input
                id="username"
                type="username"
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
                className="form-input mt-1 block w-full rounded-md border-gray-300 text-gray-800 px-3 py-2 focus:outline-none focus:border-[#d6c292] focus:ring focus:ring-[#d6c292] transition duration-200"
                placeholder="********"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#ebbd51] text-white font-bold px-4 py-2 rounded-md hover:bg-[#ffcb50] focus:outline-none focus:ring focus:ring-[#d6c292] transition duration-200"
              >
                Iniciar Sesión
              </button>
              <p className="mt-4 text-gray-600">
                ¿No tienes una cuenta?{" "}
                <a href="/sign-up" className="underline">
                  Registrate
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <Toaster />
    </>
  );
};
