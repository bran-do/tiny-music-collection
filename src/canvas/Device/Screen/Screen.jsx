import TopBar from '../../../components/TopBar/TopBar';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import './Screen.css'

function Screen() {
  return (
    <div className="screen">
      <TopBar />
      <LoginPage />
    </div>
  )
}

export default Screen;