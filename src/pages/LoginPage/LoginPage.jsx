import './LoginPage.css'

function LoginPage() {
  return (
    <div className="login-container">
        <h3>What's your name?</h3>
        <div className='input-and-btn'>
          <input placeholder="Name"></input>
          <button>A</button>
        </div>
    </div>
  )
}

export default LoginPage;