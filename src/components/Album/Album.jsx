import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import AppContext from "../../context/AppContext";
import getTracklist from "../../services/getTracklistAPI";
import TrackCard from "../../components/TrackCard/TrackCard";

import addButton from '../../assets/icons/plus-circle.svg'

import './Album.css'

function Album() {
  const location = useLocation();
  const { collection, setCollection } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    async function fetchAlbum() {
      const albumId = location.pathname.slice(7);
      const data = await getTracklist(albumId);
      setAlbumData(data);
      setLoading(false);
      console.log(albumData)
    }

    fetchAlbum();
  }, [location.pathname]);

  const handleAddToCollection = () => {
    const {
      collectionId,
      artworkUrl100,
      collectionName,
      artistName,
      releaseDate
    } = albumData[0]

    setCollection([...collection, {
      collectionId,
      artworkUrl100,
      collectionName,
      artistName,
      releaseDate,
    }]);
  }

  const displayTracklist = (album) => {
    const [_header, ...tracklist] = album.slice(1);
    return (
      <>
        <hr width="20px" />
        <ol className='album-tracklist'>
          {
            tracklist.map(({ trackId, trackName, previewUrl }) => (
              <li key={ trackId }>
                <TrackCard
                  key={ trackId }
                  previewUrl={ previewUrl }
                  trackName={ trackName }
                  trackId={ trackId }
                /> 
              </li>
            ))
          }
        </ol>
      </>
    );
  } 

  const displayAlbumPage = (album) => {
    const {
      collectionName,
      artworkUrl100,
      artistName,
      releaseDate,
      copyright
    } = album[0];
    return (
      <div className="album-container">
        <div className="album-cover-and-header">
          <img
            className="album-cover"
            src={ artworkUrl100 }
            alt={ collectionName }
            width="200px"
          />
          <div className="album-header">
            <div className="album-header-info">
              <h1>{ collectionName }</h1>
              <h3>{ artistName }</h3>
              <p>{ parseInt(releaseDate) }</p>
            </div>
            <div className="album-add-button">
              <button onClick={ handleAddToCollection }>
                <img src={ addButton } alt="Add album to collection" width="25px"/>
              </button>
            </div>
          </div>
        </div>
        {displayTracklist(album)}
        <footer>{ copyright }</footer>
      </div>
    )
  }
  
  return loading
    ? <p>Loading...</p>
    : (
      displayAlbumPage(albumData)
    )
}

export default Album;