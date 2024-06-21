import { useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';

import './CollectionPage.css'

function CollectionPage() {
  const navigate = useNavigate();

  return (
    <div className="collection-container">
      <div className="collection-header">
        <BackBtn />
        <header>Collection</header>
      </div>
    </div>
  )
}

export default CollectionPage;