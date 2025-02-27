import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import HomeSearchBar from '../../components/HomeSearchBar/HomeSearchBar';

import './HomePage.css'

import profileIcon from '../../assets/icons/user.svg'
import collectionIcon from '../../assets/icons/disc.svg'

function HomePage() {
  const appContext = useContext(AppContext);

  const navigate = useNavigate();
  const handleNavigation = (route) => navigate(`/${route}`);

  return (
    <div className='homepage-container'>
      <div className="greetings-and-search-bar">
        <div className="greetings">
          <h3>Hello,<br />{ appContext.username }.</h3>
        </div>

        <HomeSearchBar />
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