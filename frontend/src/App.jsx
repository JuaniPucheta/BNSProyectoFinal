import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";
import { Login } from "./components/Login";
import { useReducer, useState } from "react";
import { PublicationsContext, initialState } from "./components/PublicationsContext";
import { PublicationsReducer } from "./components/PublicationsReducer";

function App() {
	const [data, dispatch] = useReducer(PublicationsReducer, initialState);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLogin = () => {
		setIsAuthenticated(true);
		//? En un escenario real, aca seria la solicitud al servidor para autenticar al usuario
	}

	return (
		<PublicationsContext.Provider value={{state: data, dispatch}}>
			<Router >
				<Header />
				<Routes>
					<Route path="/" 
						element={isAuthenticated ? <Container /> : <Navigate to="/login" />}/>
					<Route path="/create-new-publication" 
						element={isAuthenticated ? <NewPublication /> : <Navigate to="/login" />} />
					<Route path="/publication/:id" 
						element={isAuthenticated ? <FullPublication /> : <Navigate to="/login" />} />
					<Route path="/login" 
						element={<Login onLogin={handleLogin} />} />
				</Routes>
				<Footer />
			</Router>
		</PublicationsContext.Provider>
	);
}

export default App;
