import BackBtn from '../../components/BackBtn/BackBtn';
import SearchSearchBar from '../../components/SearchSearchBar/SearchSearchBar';

import './SearchPage.css'

function SearchPage() {
  return (
    <div className="search-container">
      <div className="search-header">
        <BackBtn />
        <SearchSearchBar />
      </div>

      <div className="search-results-text">
        <p>Album results for</p>
        <h3>&apos;botando lenha na fogueira errada&apos;</h3>
      </div>
    </div>
  )
}

export default SearchPage;