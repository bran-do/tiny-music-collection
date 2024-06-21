import { useNavigate } from 'react-router-dom';
import './SearchPage.css'

function SearchPage() {
  const navigate = useNavigate();

  return (
    <div className="search-container">
      <div className="search-header">
        <button onClick={ () => navigate(-1) }>{ '<' }</button>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="What else?" />
          </form>
        </div>
      </div>

      <div className="search-results-text">
        <p>Album results for</p>
        <h3>'neil young'</h3>
      </div>
    </div>
  )
}

export default SearchPage;