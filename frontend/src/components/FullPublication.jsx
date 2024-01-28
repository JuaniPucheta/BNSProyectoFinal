/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCog } from '@mdi/js';
import { deletePublication, editPublication, fetchPublicationById } from '../api/publications';
import { Comment } from './Comment';
import { createComment } from '../api/comments'

export const FullPublication = () => {
  const { id } = useParams();
  const [user, setUser] = useState('Lionel Messi');
  const [publication, setPublication] = useState({});
  const [showEditPublication, setShowEditPublication] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  async function loadPublication() {
    const data = await fetchPublicationById(id);
    setPublication(data);
  }

  async function handleDeletePublication(id) {
    await deletePublication(id);
    navigate('/');
  }

  async function handleEditPublication(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    await editPublication(id, formProps);
    await loadPublication();
    setShowEditPublication(false);
    toast.success('Publicación actualizada!');
  }

  async function handleSendComment() {
    if (content === '') {
      return;
    } else {
      await createComment(id, {
        user: user,
        content: content,
      });
      setContent('');
      await loadPublication();
    }
  }

  useEffect(() => {
    loadPublication();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 h-screen"> {/* h-screen no es lo mejor, pero es algo, ver de arreglarlo */}
        {showEditPublication ? (
          <div key={publication._id} className="card w-full max-w-xl mx-auto p-6">
            <form onSubmit={(e) => handleEditPublication(e, publication._id)}>
              <div className="card-header flex justify-between items-center mb-4">
                <input
                  className="form-input w-full border-b-2 px-2 border-gray-300 focus:border-[#b59e67] outline-none"
                  id="title"
                  name="title"
                  aria-describedby="title"
                  defaultValue={publication.title}
                  placeholder="Titulo"
                />
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle btn-sm setting-publication flex items-center"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Icon className="setting" path={mdiCog} size={0.8} />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button
                    className="dropdown-option px-4 block text-left"
                    onClick={() => handleDeletePublication(publication._id)}
                  >
                    Eliminar
                  </button>
                  </div>
                </div>
              </div>

              <div className="card-body">
              <textarea
                className="form-input border border-gray-300 rounded-md p-2 w-full"
                defaultValue={publication.description}
                id="description"
                name="description"
                placeholder="Descripción de la publicación"
                rows="4"
              />
              <input
                type="text"
                className="form-input border border-gray-300 rounded-md p-2 mt-2 w-full"
                id="image-url"
                name="image"
                defaultValue={publication.image}
                placeholder="URL de la imagen"
              />
              <div className="buttons mt-4">
                <button
                  className="btn btn-secondary mr-2"
                  onClick={() => setShowEditPublication(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn bg-[#678c99] text-white hover:bg-[#4c7887]">
                  Editar publicación
                </button>
              </div>
              </div>
            </form>
          </div>
        ) : (
          <div key={publication._id} className="card full-publication max-w-xl mx-auto p-4 border-4 border-[#ffecbe] border-b-[#b59e67]">
            <div className="card-header flex justify-between items-center">
              <h5 className="card-title text-lg font-semibold">{publication.title}</h5>
            	<div className="dropdown relative inline-block text-left">
					<button
						className="btn dropdown-toggle btn-sm setting-publication flex items-center"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<Icon className="setting" path={mdiCog} size={0.8} />
					</button>

					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<button
							className="dropdown-option border-b border-gray-300 py-2 px-4 block w-full text-left"
							onClick={() => setShowEditPublication(true)}
						>
							Editar
						</button>
						<button
							className="dropdown-option py-2 px-4 block w-full text-left"
							onClick={() => handleDeletePublication(publication._id)}
						>
							Eliminar
						</button>
					</div>
				</div>
            </div>
            <div className="card-body">
              <p className="text-gray-700 font-medium text-center">{publication.description}</p>
              <img
                src={publication.image}
                className="card-img-full max-h-96 object-cover rounded-md mt-4"
                alt={publication.title}
              />
              <div>
                <h5 className="text-lg font-semibold mt-4 b">Comentarios</h5>
                {publication &&
                  publication.comments &&
                  publication.comments.map((com, i) => (
                    <Comment
                      i={i}
                      key={com._id}
                      pub={publication}
                      com={com}
                      user={user}
                      content={content}
                      setContent={setContent}
                      loadPublication={loadPublication}
                    />
                  ))}
              </div>
              <div className="comment-box-send flex items-center mt-4">
                <input
                  className="form-input border border-gray-300 rounded-md p-2 flex-1 mr-2 focus:outline-none"
                  type="text"
                  placeholder="Agregar un comentario"
                  onClick={() => setShowSend(!showSend)}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                {showSend && (
                  <button
                    className="btn-sm btn btn-comment-send bg-[#678c99] hover:bg-[#4c7887] text-white rounded-md px-4"
                    onClick={() => handleSendComment(publication._id)}
                  >
                    Enviar
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};
