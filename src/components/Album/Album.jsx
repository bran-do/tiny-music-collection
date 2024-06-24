import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getTracklist from "../../services/getTracklistAPI";
import TrackCard from "../../components/TrackCard/TrackCard";


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
      <ul>
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
      </ul>
    );
  } 

  const displayAlbum = (album) => {
    return (
      <>
        <div className="album-title">
          <img src={ album[0].artworkUrl100 } alt="" />
          <h1>{ album[0].collectionName }</h1>
          <h3>{ album[0].artistName }</h3>
        </div>
        {displayTracklist(album)}
        {console.log(albumData)}
      </>
    )
  }
  
  return loading
    ? <p>Loading...</p>
    : displayAlbum(albumData)
}

export default Album;