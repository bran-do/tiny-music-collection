import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './LoginPage.css'

function LoginPage() {
  const appContext = useContext(AppContext);

  const [name, setName] = useState('');
  
  const navigate = useNavigate();
  const handleChange = (event) => { setName(event.target.value) };
  const handleSubmit = () => {
    appContext.setUsername(name);
    navigate('/home') 
  };

  return (
    <div className="login-container">
        <h3>What&apos;s your name?</h3>
        <form onSubmit={ handleSubmit } className='input-and-btn'>
          <input
            placeholder="Name"
            type="text"
            name="username"
            value={ name }
            onChange={ handleChange }
          />
          <button>{'>'}</button>
        </form>
    </div>
  )
}

export default LoginPage;