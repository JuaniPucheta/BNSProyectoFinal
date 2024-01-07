import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";
import { Login } from "./components/Login";
import { useReducer } from "react";
import { PublicationsContext, initialState } from "./components/PublicationsContext";
import { PublicationsReducer } from "./components/PublicationsReducer";

function App() {
	const [data, dispatch] = useReducer(PublicationsReducer, initialState);

	return (
		<PublicationsContext.Provider value={{state: data, dispatch}}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Container />} />
					<Route path="/create-new-publication" element={<NewPublication />} />
					<Route path="/publication/:id" element={<FullPublication />}/>
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</Router>
		</PublicationsContext.Provider>
	);
}

export default App;
