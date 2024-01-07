const BASE_BACKEND = import.meta.env.VITE_BACKEND_URL;

//* Publications
export async function fetchPublications() {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/publications`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchPublicationById(publicationId) {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/publications/${publicationId}`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function createPublication(publication) {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/publications`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(publication),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function editPublication(publicationId, publication) {
	try {
		console.log(publication);
		const response = await fetch(
			`${BASE_BACKEND}/publications/${publicationId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(publication),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function deletePublication(id) {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/publications/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchPublicationByKeyWord(keyWord) {
	try {
		const response = await fetch(
			`${
				BASE_BACKEND
			}/publications/search/${keyWord}`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

//* Comments
export async function createComment(publicationId, comment) {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/publications/${publicationId}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function editComment(commentId, comment) {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/comment/${commentId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteComment(id) {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/comment/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

//* Users
export const loginUser = async (credentials) => {
	try {
		const response = await fetch(`${BASE_BACKEND}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			throw new Error("Error al iniciar sesión. Verifique sus credenciales.");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error en la función loginUser:", error.message);
		throw error;
	}
};

export const registerUser = async (credentials) => {
	try {
		const response = await fetch(`${BASE_BACKEND}/register`, {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			throw new Error("Error al registrar el usuario.");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error en la función registerUser:", error.message);
		throw error;
	}
};

