import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useReducer, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";
import { Login } from "./components/Login";
import { SignIn } from "./components/SignIn";
import { AppContext, initialState } from "./components/AppContext";
import { AppReducer } from "./components/AppReducer";

function App() {
	const [data, dispatch] = useReducer(AppReducer, initialState);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsLoggedIn(!!token);
	}, []);

	return (
		<AppContext.Provider value={{state: data, dispatch}}>
			<Router>
				{isLoggedIn ? (
					<>
						<Header />
						<Routes>
							<Route path="/" element={<Container />} />
							<Route path="/create-new-publication" element={<NewPublication />} />
							<Route path="/publication/:id" element={<FullPublication />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
						<Footer />
					</>
				) : (
					<>
						<Routes>
							<Route path="/" default element={<Navigate to='/sign-in' />} />
							<Route path="/login" element={<Login />} />
							<Route path="/sign-in" element={<SignIn />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
					</>
				)}
			</Router>
		</AppContext.Provider>
	);
}

export default App;
