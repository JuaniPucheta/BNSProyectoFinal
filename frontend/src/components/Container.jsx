import "../styles/container.css";
import { useEffect, useState, useContext } from "react";
import { PublicationCard } from "./PublicationCard";
import { fetchPublications } from "../api/publications";
import { useNavigate } from "react-router-dom";

import { AppContext } from "./AppContext";

export const Container = () => {
	const navigate = useNavigate();
	const [publications, setPublications] = useState([]);
	const [loading, setLoading] = useState(false);	
	const appContext = useContext(AppContext);

	const loadPublications = async () => {
		setLoading(true);
		const data = await fetchPublications();
		setPublications(data);
		setLoading(false);
	};

	useEffect(() => {
		loadPublications();
	}, []);

	useEffect(() => {
		if (!appContext.state.publications) {
			loadPublications();
		} else {
			setPublications(appContext.state.publications);
		}
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	, [appContext.state.publications]);

	return (
		<div className="container min-h-screen">
			{loading ? (
				<div className="flex items-center justify-center min-h-screen">
					<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#678c99]"></div>
					<p className="ml-4 text-[#678c99]">Cargando publicaciones...</p>
				</div>
			) : (
				<div className="flex flex-wrap justify-center">
					{publications.length > 0 && (
						publications.map((pub) => (
						<div
							key={pub._id}
							className="mx-4 mb-4 max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"
						>
							<PublicationCard
								key={pub._id}
								pub={pub}
								loadPublications={loadPublications}
							/>
						</div>
						))
					)}
					{!appContext.state.publications && (
						<div className="container min-h-screen flex justify-center items-center">
							<div className="card text-center new-publication-card mx-4 mb-4 max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl bg-gradient-to-br from-[#d6c292] to-[#fff1cf] p-4 rounded-md shadow-md">
								<div className="card-body">
									<h5 className="card-title text-white font-bold text-xl mb-4">
										Crear nueva publicación
									</h5>
									<button
										onClick={() => navigate("/create-new-publication")}
										className="btn bg-[#678c99] hover:bg-[#b8c7cc] text-white font-semibold w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
									>
										Ir a crear
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};