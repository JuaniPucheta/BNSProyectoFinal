import { createContext } from "react";

export const initialState = {
	loggedIn: false,
	publications: [],
};

export const AppContext = createContext({});