import { deleteComment, editComment } from "../api/comments";
import PropTypes from "prop-types";

import "../styles/comment.css";

Comment.propTypes = {
	content: PropTypes.string.isRequired,
	setContent: PropTypes.func.isRequired,
	pub: PropTypes.any.isRequired,
	i: PropTypes.number.isRequired,
	com: PropTypes.any.isRequired,
	loadPublication: PropTypes.func.isRequired,
	selectedComment: PropTypes.string.isRequired,
	setSelectedComment: PropTypes.func.isRequired,
};


export const Comment = (props) => {

	async function handleEditComment(commentId) {
		await editComment(commentId, {
			content: props.content,
		});
		props.setContent("");
		await props.loadPublication();
		props.setSelectedComment("");
	}

	async function handleDeleteComment(commentId) {
		await deleteComment(commentId);
		await props.loadPublication();
	}

	return (
		<>
			<div className="card-body comment">
				{props.selectedComment === props.com._id ? (
					<div className="d-flex flex-start">
						<img
							className="rounded-circle shadow-1-strong me-3"
							src="https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1"
							alt="avatar"
						/>
						<div className=" mb-1 ">						
							<div className="comment-box">
								<input
									className="form-control"
									id="comment-edit"
									defaultValue={props.com.content}
									onChange={(e) =>
										props.setContent(e.target.value)
									}
								/>
								<button
									className="btn-sm btn btn-comment-edit bg-green-500 text-white rounded-md px-3 hover:bg-green-400"
									onClick={() =>
										handleEditComment(props.com._id)
									}
								>
									Enviar
								</button>
							</div>
							<div className="d-flex comment-header mt-1">
								<h6>{props.com.user}</h6>
								<button
									className="btn btn-sm bg-gray-500 text-white mx-2 hover:bg-slate-400"
									onClick={() => props.setSelectedComment("")}
								>
									Cancelar
								</button>
								<button
									className="btn btn-sm bg-red-500 text-white hover:bg-red-400"
									onClick={() =>
										handleDeleteComment(props.com._id)
									}
								>
									Borrar
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className="d-flex flex-start">
						<img
							className="rounded-circle shadow-1-strong me-3"
							src="https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1"
							alt="avatar"
						/>
						<div className=" mb-1 ">
							<div className="d-flex comment-header mt-1">
								<h6 className="commentUser">
									{props.com.user}
								</h6>
								{props.com.userId === 
									localStorage.getItem("userId") && (
										<button
											className="btn btn-sm mb-2 bg-[#b59e67] text-white mx-2 hover:bg-[#debc6e]" 
											onClick={() => props.setSelectedComment(props.com._id)}
										>
											Editar
										</button>
									)
								}
							</div>
							<p>{props.com.content}</p>
						</div>
					</div>
				)}
				{!(props.i + 1 === props.pub.comments.length) && (
					<hr className="my-0" />
				)}
			</div>
		</>
	);
};

