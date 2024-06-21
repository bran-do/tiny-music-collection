import { useNavigate } from 'react-router-dom';
import './CollectionPage.css'

function CollectionPage() {
  const navigate = useNavigate();

  return (
    <div className="collection-container">
      <div className="collection-header">
        <button onClick={ () => navigate(-1) }>{ '<' }</button>
        <header>Collection</header>
      </div>
    </div>
  )
}

export default CollectionPage;