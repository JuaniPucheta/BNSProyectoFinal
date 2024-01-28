// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { fetchPublicationByKeyWord } from '../api/publications';
import { AppContext } from './AppContext';
import Icon from '@mdi/react';
import { mdiMenu, mdiMagnify, mdiTools, mdiClose, mdiLogout } from '@mdi/js';

const options = [
  { title: 'Inicio', route: '/'},
  { title: 'Crear publicación', route: '/create-new-publication' },
];

export const Header = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const appContext = useContext(AppContext);

	async function handleSearch(e, keyWord) {
		e.preventDefault();
		
    const payload = await fetchPublicationByKeyWord(keyWord);
    
		appContext.dispatch({
			type: "setPublications",
			payload,
		});
	}

	function resetPublications() {
		setSearch("");
    appContext.dispatch({
      type: "setPublications",
      payload: null,
    });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate(0);
  }

	useEffect(() => {
		if (!search) resetPublications();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

  return (
    <nav className="bg-[#678c99] text-white text-base sticky p-2 rounded-lg shadow m-4">
      <div className="mx-5 flex justify-between items-center">

        <div className="icon cursor-pointer" onClick={() => navigate('/')}>
          <h2 className="text-lg flex items-center">
            <Icon path={mdiTools} size={1} className="mr-2" />
            HARDWARE JIP
          </h2>
        </div>

        <button
          className="navbar-toggler lg:hidden"
          onClick={() => navigate('/')}
        >
          <Icon path={mdiMenu} size={1} />
        </button>

        <div className="menuList hidden lg:flex items-center space-x-4">
          {options.map((option) => (
            <div
              className="nav-item cursor-pointer font-semibold transition duration-300 ease-in-out hover:text-gray-300 hover:bg-[#576f80] rounded-md p-2"
              onClick={() => navigate(option.route)}
              key={option.title}
            >
              {option.title}
            </div>
          ))}

          <div className="search-form ml-4">
            <form
              className="flex items-center gap-2"
              role="search"
              onSubmit={(e) => handleSearch(e, e.target.search.value)}
            >
              <input
                className="form-input px-2 py-1 border text-gray-900 font-medium border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#b59e67]"
                placeholder="Buscar..."
                aria-label="Search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(e, e.target.value)}
              />
              {search && (
                <button
                  className="btn btn-sm btn-search hover:text-white hover:bg-red-400"
                  onClick={resetPublications}
                >
                  <Icon path={mdiClose} size={1} />
                </button>
              )}
              <button
                className="btn btn-sm btn-search text-white bg-[#c8a452] hover:bg-[#ffc743]"
                type="submit"
              >
                <Icon path={mdiMagnify} size={1} />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2">
            <img 
              className="rounded-circle shadow-1-strong userAvatar"
              src={`https://ui-avatars.com/api/?name=${localStorage.getItem("user")}&background=random`}
              alt="avatar"
            />
            <button
              className="btn btn-sm btn-logout bg-red-500 hover:bg-red-400"
              onClick={handleLogout}
            >
              <Icon path={mdiLogout} size={1} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};
