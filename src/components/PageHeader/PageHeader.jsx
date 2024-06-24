import BackBtn from "../BackBtn/BackBtn";

import './PageHeader.css'

function PageHeader({ pageTitle }) {
  return (
    <div className="page-header-container">
      <div className="page-header">
        <BackBtn />
        <header>{ pageTitle }</header>
      </div>
    </div>
  )
}

export default PageHeader;