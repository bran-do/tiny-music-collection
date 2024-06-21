import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './HomeSearchBar.css';

import searchIcon from '../../assets/icons/search.svg'

function HomeSearchBar() {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  const [term, setTerm] = useState('');

  const handleChange = (event) => { setTerm(event.target.value) };
  const handleSubmit = () => {
    appContext.setSearchTerm(term);
    navigate('/search');
  }

  return (
    <div className="search-bar">
      <form onSubmit={ handleSubmit }>
        <button>
          <img src={ searchIcon } alt="Search" width="14" />
        </button>
        <input
          className="search-input"
          placeholder='Add some music to your collection'
          name="search-term"
          type="text"
          value={ term }
          onChange={ handleChange }
        />
      </form>
    </div>
  )

}

export default HomeSearchBar;