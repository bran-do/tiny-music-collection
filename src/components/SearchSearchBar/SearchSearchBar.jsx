import { useState, useContext } from 'react';
import SearchContext from '../../context/SearchContext';

import './SearchSearchBar.css';

import searchIcon from '../../assets/icons/search.svg'

function SearchSearchBar() {
  const searchContext = useContext(SearchContext);

  const [term, setTerm] = useState('');

  const handleChange = (event) => { setTerm(event.target.value) };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchContext.setSearchTerm(term)
  };

  return (
    <div className="search-search-bar">
      <form onSubmit={ handleSubmit }>
        <button>
          <img src={ searchIcon } alt="Search" width="14" />
        </button>
        <input
          className="search-search-bar-input"
          placeholder='What else?'
          name="search-term"
          type="text"
          value={ term }
          onChange={ handleChange }
        />
      </form>
    </div>
  )
}

export default SearchSearchBar;