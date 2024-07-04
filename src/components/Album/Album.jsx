import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import getTracklist from "../../services/getTracklistAPI";
import TrackCard from "../../components/TrackCard/TrackCard";

import addButton from '../../assets/icons/plus-circle.svg'

import './Album.css'

function Album() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    async function fetchAlbum() {
      const albumId = location.pathname.slice(7);
      const data = await getTracklist(albumId);
      setAlbumData(data);
      setLoading(false);
    }

    fetchAlbum();
  }, [location.pathname]);

  const displayTracklist = (tracklist) => {
    const tracklistWOHeader = tracklist.slice(1);
    return (
      <ol className='album-tracklist'>
        {
          tracklistWOHeader.map(({ trackId, trackName, previewUrl }) => (
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
    );
  } 

  const displayAlbumPage = (album) => {
    const {
      collectionName,
      artworkUrl100,
      artistName,
      releaseDate,
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
              <button>
                <img src={ addButton } alt="Add album to collection" width="25px"/>
              </button>
            </div>
          </div>
        </div>
        {displayTracklist(album)}
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