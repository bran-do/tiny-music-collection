import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
import searchAlbumsAPI from "../../services/searchAlbumsAPI";

import './AlbumResultList.css'

function AlbumResultList() {
  const { searchTerm } = useContext(SearchContext);

  const [albumSearchResult, setAlbumSearchResult] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const foundAlbums = await searchAlbumsAPI(searchTerm);
      setAlbumSearchResult(foundAlbums);
    };

    console.log(albumSearchResult)

    fetchAlbums();
  }, [searchTerm])

  const albumFormatter = (album) => {
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

  return (
    <div className="search-result-container">
      <ul className="search-result-list">
        { albumSearchResult.map((album) => albumFormatter(album)) }
      </ul>
    </div>
  )
}

export default AlbumResultList;