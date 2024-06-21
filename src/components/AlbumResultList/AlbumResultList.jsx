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

    fetchAlbums();
  }, [searchTerm])

  const albumFormatter = (album) => {
    const {
      collectionId,
      artworkUrl100,
      collectionName,
    } = album;

    return (
      <Link
        to={ `/album/${collectionId}` }
        key={ collectionId }
        className="album"
      >
        <li key={ collectionId }>
              <img src={ artworkUrl100 } alt={ collectionName } />
              <p>{ collectionName }</p>
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