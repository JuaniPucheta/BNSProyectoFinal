import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useReducer } from "react";
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

	return (
		<AppContext.Provider value={{state: data, dispatch}}>
			<Router>
				{data.loggedIn ? (
					<>
						<Header />
						<Routes>
							<Route path="/" element={<Container />} />
							<Route path="/create-new-publication" element={<NewPublication />} />
							<Route path="/publication/:id" element={<FullPublication />} />
						</Routes>
						<Footer />
					</>
				) : (
					<>
						<Routes>
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
