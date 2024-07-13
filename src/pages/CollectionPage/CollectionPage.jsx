import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import CollectionList from '../../components/CollectionList/CollectionList';
import PageHeader from '../../components/PageHeader/PageHeader';

import discIcon from '../../assets/icons/disc-small.svg'
import './CollectionPage.css'

function CollectionPage() {
  const { collection } = useContext(AppContext)

  return (
    <>
      <PageHeader pageTitle={ "Collection" } />
      {
        collection.length != 0
        ? <CollectionList />
        : <div className='collection-empty'>
            <img src={ discIcon } alt="" width="50px"/>
            <h3>Search and add albums to your collection :)</h3>
        </div>
      }
    </>
  )
}

export default CollectionPage;