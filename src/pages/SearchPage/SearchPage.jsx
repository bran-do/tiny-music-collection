import BackBtn from '../../components/BackBtn/BackBtn';

import './SearchPage.css'
import searchIcon from '../../assets/icons/search.svg'

function SearchPage() {
  return (
    <div className="search-container">
      <div className="search-header">
        <BackBtn />
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
        <h3>&apos;botando lenha na fogueira errada&apos;</h3>
      </div>
    </div>
  )
}

export default SearchPage;