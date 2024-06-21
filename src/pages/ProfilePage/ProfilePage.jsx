import { useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';

import './ProfilePage.css'

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <BackBtn />
        <header>Profile</header>
      </div>
    </div>
  )
}

export default ProfilePage;