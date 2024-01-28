const BASE_BACKEND = import.meta.env.VITE_BACKEND_URL;

export const logIn = async (user) => {
	const response = await fetch(
		`${BASE_BACKEND}/logIn`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}
	);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();

	return data;
};

export const signUp = async (user) => {
	const response = await fetch(`${BASE_BACKEND}/signUp`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response;
};