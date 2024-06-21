import './HomePage.css'

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className="greetings-and-search-bar">
        <div className="greetings">
          <h1>Hello,<br />user.</h1>
        </div>

        <div className="search-bar">
          <form>
            <input type="text" placeholder='Add some music to your collection' />
            <button>A</button>
          </form>
        </div>
      </div>

      <nav className="buttons-menu">
        <button>X</button>
        <button>Y</button>
      </nav>
    </div>
  )
}

export default HomePage;