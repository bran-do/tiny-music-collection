import Album from "../../components/Album/Album";
import BackBtn from "../../components/BackBtn/BackBtn";

import './AlbumPage.css'

function AlbumPage() {
  return (
    <div className="album-album-container">
      <BackBtn />
      <Album />
    </div>
  )
}

export default AlbumPage;