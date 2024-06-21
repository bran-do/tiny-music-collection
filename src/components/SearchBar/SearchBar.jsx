import { useState } from 'react';
import searchIcon from '../../assets/icons/search.svg'

import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => { setSearchTerm(event.target.value) };

  return (
    <div className="search-bar">
      <form onSubmit={ () => navigate('/search') }>
        <button>
          <img src={ searchIcon } alt="Search" width="14" />
        </button>
        <input
          className="search-input"
          placeholder='Add some music to your collection'
          name="search-term"
          type="text"
          value={ searchTerm }
          onChange={ handleChange }
        />
      </form>
    </div>
  )

}

export default SearchBar;