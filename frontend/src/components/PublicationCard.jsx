/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const PublicationCard = (props) => {
  const navigate = useNavigate();

  return (
    <div key={props.pub._id} className="card max-w-md mx-auto font-medium rounded-xl text-center border-4 border-[#ffecbe] border-b-[#b59e67]">
      <div className="card-header flex justify-between mt-2 bg-gray-200">
        <h5 className="card-title">{props.pub.title}</h5>
      </div>

      <div className="card-body flex flex-col gap-4">
        <p className="card-text overflow-hidden overflow-ellipsis whitespace-nowrap mb-0">
          {props.pub.description}
        </p>
        <img
          src={props.pub.image}
          alt={props.pub.title}
          className="card-img object-cover h-48 w-full"
        />

		<div className="text-center">
			<button
				className="btn text-white font-bold w-fit bg-[#b59e67] hover:bg-[#d6c292] transition duration-200"
				onClick={() => navigate(`/publication/${props.pub._id}`)}>
			Ver publicación completa</button>
		</div>
      </div>
    </div>
  );
};

