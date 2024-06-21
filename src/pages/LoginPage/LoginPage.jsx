import './LoginPage.css'

import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home')
  }

  return (
    <div className="login-container">
        <h3>What's your name?</h3>
        <form onSubmit={ handleSubmit } className='input-and-btn'>
          <input placeholder="Name" type="text" />
          <button>{'>'}</button>
        </form>
    </div>
  )
}

export default LoginPage;