import "../styles/container.css";
import { useEffect, useState } from "react";
import { PublicationCard } from "./PublicationCard";
import { fetchPublications } from "../ApiMethods";

export const Container = () => {
	const [publications, setPublications] = useState([]);

	const loadPublications = async () => {
		const data = await fetchPublications();
		setPublications(data);
	};

	useEffect(() => {
		loadPublications();
	}, []);

	return (
		// TODO --> Manejar las columnas de forma dinámica, dependiendo del tamaño de la pantalla (col-1, col-2, col-3, col-4)
		// TODO --> Agregar una card de "Cargando publicaciones" mientras se cargan las publicaciones
		// TODO --> Agregar un botón de "Cargar publicaciones" cuando no hay publicaciones
		// TODO --> Manejar el tema de ocupar toda la pantalla y que no haya un espacio en blanco al final
		
		<div className="container">
			<div className="row row-cols-3">
				{publications.map((pub) => (
					<PublicationCard
						key={pub._id}
						pub={pub}
						loadPublications={loadPublications}
					/>
				))}
			</div>
		</div>
	);
};