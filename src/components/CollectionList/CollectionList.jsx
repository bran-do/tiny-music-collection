import { useContext } from "react";

import AppContext from "../../context/AppContext";
import albumFormatter from "../../utils/albumFormatter";

import './CollectionList.css'

function CollectionList() {
  const { collection } = useContext(AppContext);
  
  return (
    <div className="collection-container">
      <div className="collection-list">
        { collection.map((album) => albumFormatter(album, false))}
      </div>
    </div>
  )
}

export default CollectionList;