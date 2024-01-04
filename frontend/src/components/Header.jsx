// eslint-disable-next-line no-unused-vars
import { mdiMenu, mdiMagnify, mdiTools } from '@mdi/js';
import Icon from '@mdi/react';
import { useNavigate } from 'react-router-dom';
// import { fetchPublicationByKeyWord } from '../ApiMethods';

const options = [
  { title: 'Crear publicación', route: '/create-new-publication' },
  //? hago esto por si en un futuro se agregan más opciones
];

export const Header = () => {
  const navigate = useNavigate();

  //! No funciona actualmente 
  // async function handleSearch(e) {
  //   e.preventDefault();
  //   await fetchPublicationByKeyWord(e.target.search.value);
  // }

  return (
    <nav className="bg-[#678c99] text-white text-base sticky p-2 rounded-lg shadow m-4">
      <div className="mx-5 flex justify-between items-center">

        <div className="icon cursor-pointer" onClick={() => navigate('/')}>
          <h2 className="text-lg flex items-center">
            <Icon path={mdiTools} size={1} className="mr-2" />
            MATERIALES JIP
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
              className="nav-item cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:bg-[#576f80] rounded-md p-2"
              onClick={() => navigate(option.route)}
              key={option.title}
            >
              {option.title}
            </div>
          ))}

          {/* No funciona */}
          {/* <div className="search-form">
            <form
              className="flex items-center"
              role="search"
              onSubmit={(e) => handleSearch(e)}
            >
              <input
                className="form-input me-2 py-1 px-2 rounded-md text-dark font-normal"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                id="search"
              />
              <button
                className="btn btn-search bg-gray-200 px-2 py-1 rounded-md"
                type="submit"
              >
                <Icon path={mdiMagnify} size={1} />
              </button>
            </form>
          </div> */}

        </div>

      </div>
    </nav>
  );
};
