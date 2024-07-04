import { useEffect, useContext, useState } from "react";
import SearchContext from "../../context/SearchContext";

import searchAlbumsAPI from "../../services/searchAlbumsAPI";
import albumFormatter from "../../utils/albumFormatter";

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

  return (
    <div className="search-result-container">
      <ul className="search-result-list">
        { albumSearchResult.map((album) => albumFormatter(album)) }
      </ul>
    </div>
  )
}

export default AlbumResultList;