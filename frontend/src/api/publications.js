const token = sessionStorage.getItem("token") ?? null;
const BASE_BACKEND = import.meta.env.VITE_BACKEND_URL;

export async function fetchPublications() {
	try {
		const response = await fetch(
			`${BASE_BACKEND}/publications`,
			{
				method: "GET",
				headers: {
					Authorization: token,
				},
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
			`${BASE_BACKEND}/publications/search/${keyWord}`,
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