import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button onClick={ () => navigate(-1) }>{ '<' }</button>
        <header>Profile</header>
      </div>
    </div>
  )
}

export default ProfilePage;