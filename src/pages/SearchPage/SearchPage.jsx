import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './SearchPage.css'

import BackBtn from '../../components/BackBtn/BackBtn';
import SearchSearchBar from '../../components/SearchSearchBar/SearchSearchBar';

function SearchPage() {
  const appContext = useContext(AppContext);

  return (
    <div className="search-container">
      <div className="search-header">
        <BackBtn />
        <SearchSearchBar />
      </div>

      <div className="search-results-text">
        <p>Album results for</p>
        <h3>&apos;{ appContext.searchTerm }&apos;</h3>
      </div>
    </div>
  )
}

export default SearchPage;