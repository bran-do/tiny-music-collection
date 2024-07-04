import CollectionList from '../../components/CollectionList/CollectionList';
import PageHeader from '../../components/PageHeader/PageHeader';
import './CollectionPage.css'

function CollectionPage() {
  return (
    <>
      <PageHeader pageTitle={ "Collection" } />
      <CollectionList />
    </>
  )
}

export default CollectionPage;