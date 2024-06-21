import { useState } from 'react';
import searchIcon from '../../assets/icons/search.svg'

import './SearchSearchBar.css';

function SearchSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => { setSearchTerm(event.target.value) };

  return (
    <div className="search-search-bar">
      <form>
        <button>
          <img src={ searchIcon } alt="Search" width="14" />
        </button>
        <input
          className="search-search-bar-input"
          placeholder='What else?'
          name="search-term"
          type="text"
          value={ searchTerm }
          onChange={ handleChange }
        />
      </form>
    </div>
  )
}

export default SearchSearchBar;