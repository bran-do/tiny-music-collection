import { useNavigate } from 'react-router-dom';
import './HomePage.css'

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
            <button>S</button>
            <input type="text" placeholder='Add some music to your collection' />
          </form>
        </div>
      </div>

      <nav className="buttons-menu">
        <button onClick={ () => handleNavigation('collection') }>C</button>
        <button onClick={ () => handleNavigation('profile') }>P</button>
      </nav>
    </div>
  )
}

export default HomePage;