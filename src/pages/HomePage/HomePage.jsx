import './HomePage.css'

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className="greetings-and-search-bar">
        <div className="greetings">
          <h3>Hello,<br />user.</h3>
        </div>

        <div className="search-bar">
          <form>
            <input type="text" placeholder='Add some music to your collection' />
            <button>S</button>
          </form>
        </div>
      </div>

      <nav className="buttons-menu">
        <button>C</button>
        <button>P</button>
      </nav>
    </div>
  )
}

export default HomePage;