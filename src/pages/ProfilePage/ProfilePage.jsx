import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="profile-header">
        <button onClick={ () => navigate(-1) }>{ '<' }</button>
        <header>Profile</header>
      </div>
    </>
  )
}

export default ProfilePage;