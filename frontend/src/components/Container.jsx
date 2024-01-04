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