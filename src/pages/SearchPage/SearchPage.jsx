import { useNavigate } from 'react-router-dom';

import './SearchPage.css'
import searchIcon from '../../assets/icons/search.svg'

function SearchPage() {
  const navigate = useNavigate();

  return (
    <div className="search-container">
      <div className="search-header">
        <button onClick={ () => navigate(-1) }>{ '<' }</button>
        <div className="search-bar">
          <form>
            <button>
              <img src={ searchIcon } alt="Search" width="14" />
            </button>
            <input type="text" placeholder="What else?" />
          </form>
        </div>
      </div>

      <div className="search-results-text">
        <p>Album results for</p>
        <h3>'botando lenha na fogueira errada'</h3>
      </div>
    </div>
  )
}

export default SearchPage;