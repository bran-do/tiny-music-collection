import { useNavigate } from 'react-router-dom';
import './HomePage.css'

import searchIcon from '../../assets/icons/search.svg'
import profileIcon from '../../assets/icons/user.svg'
import collectionIcon from '../../assets/icons/disc.svg'

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = (route) => navigate(`/${route}`);

  return (
    <div className='homepage-container'>
      <div className="greetings-and-search-bar">
        <div className="greetings">
          <h3>Hello,<br />user.</h3>
        </div>

        <div className="search-bar">
          <form onSubmit={ () => handleNavigation('search') }>
            <button>
              <img src={ searchIcon } alt="Search" width="14" />
            </button>
            <input type="text" placeholder='Add some music to your collection' className="search-input" />
          </form>
        </div>
      </div>

      <nav className="buttons-menu">
        <button onClick={ () => handleNavigation('collection') }>
          <img src={ collectionIcon } alt="Collection" />
        </button>

        <span className="icon-divider" />

        <button onClick={ () => handleNavigation('profile') }>
          <img src={ profileIcon } alt="Profile" />
        </button>
      </nav>
    </div>
  )
}

export default HomePage;