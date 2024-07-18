import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import AppContext from "../../context/AppContext";
import getTracklist from "../../services/getTracklistAPI";
import TrackCard from "../../components/TrackCard/TrackCard";

import addButton from '../../assets/icons/plus-circle.svg'
import okButton from '../../assets/icons/check-circle.svg'

import './Album.css'

function Album() {
  const location = useLocation();
  const { collection, setCollection } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState(null);
  const [inCollection, setInCollection] = useState(false);

  useEffect(() => {
    async function fetchAlbum() {
      const albumId = location.pathname.slice(7);
      const data = await getTracklist(albumId);
      setAlbumData(data);
      setLoading(false);
    }
    
    fetchAlbum();
  }, [location.pathname]);

  useEffect(() => {
    const albumId = location.pathname.slice(7);
    collection.forEach(({ collectionId }) => {
      if (albumId == collectionId) {
        setInCollection(true);
      }
    })
  }, [location.pathname, collection])

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
  };

  const handleDeleteFromCollection = () => {
    setCollection(
      collection.filter(
        ({ collectionId }) => collectionId !== albumData[0].collectionId
      )
    );
    setInCollection(false);
  }

  const displayTracklist = (album) => {
    const [, ...tracklist] = album;
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
              {
                inCollection
                  ? (
                  <button onClick={ handleDeleteFromCollection }>
                    <img src={ okButton } alt="Album in collection. Click to delete it" width="30px"/>
                  </button>
                  )

                  : (
                    <button onClick={ handleAddToCollection }>
                      <img src={ addButton } alt="Add album to collection" width="30px"/>
                    </button>
                  )
              }
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