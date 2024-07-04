import { Link } from "react-router-dom";

function albumFormatter(album) {
  const {
    collectionId,
    artworkUrl100,
    collectionName,
    artistName,
    releaseDate,
  } = album;

  return (
    <Link
      to={ `/album/${collectionId}` }
      key={ collectionId }
    >
      <li className="album" key={ collectionId }>
            <img src={ artworkUrl100 } alt={ collectionName } />
            <div className="album-info">
              <span className="album-name">{ collectionName }</span>
              <span className="album-artist">{ artistName }</span>
              <span className="album-year">{ parseInt(releaseDate) }</span>
            </div>
      </li>
    </Link>
  )
}

export default albumFormatter;
