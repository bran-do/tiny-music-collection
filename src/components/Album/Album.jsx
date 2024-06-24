import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getTracklist from "../../services/getTracklistAPI";
import TrackCard from "../../components/TrackCard/TrackCard";

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
      <ol>
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
        <img
          className="album-cover"
          src={ artworkUrl100 }
          alt={ collectionName }
        />
        <div className="album-header">
          <h1>{ collectionName }</h1>
          <h3>{ artistName }</h3>
          <p>{ parseInt(releaseDate) }</p>
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