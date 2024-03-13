const YourPasswordsContainer = props => {
  const {searchWord, getSearchWord, passwordsList, filteredList} = props

  return (
    <>
      <div className="your-passwords-container">
        <div className="count-passwords">
          <h1 className="your-passwords-heading">Your Passwords</h1>
          <p className="count">
            {searchWord === '' ? passwordsList.length : filteredList.length}
          </p>
        </div>
        <div className="search-bar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            className="search-icon"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            onChange={getSearchWord}
          />
        </div>
      </div>
    </>
  )
}

export default YourPasswordsContainer
