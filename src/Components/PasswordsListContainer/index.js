const PasswordsListContainer = props => {
  const {
    filteredList,
    passwordsList,
    searchWord,
    deleteItem,
    showPasswords,
  } = props

  return (
    <div className="passwords-list-container">
      <ul className="list-container">
        {(filteredList.length === 0 && searchWord !== '') ||
        passwordsList.length === 0 ? (
          <div className="no-passwords-1">
            <div className="no-passwords-image-container">
              <img
                className="no-password-image"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          </div>
        ) : (
          passwordsList
            .filter(each =>
              each.username.toLowerCase().includes(searchWord.toLowerCase()),
            )
            .map(eachItem => (
              <div className="each-list-container-1">
                <li key={eachItem.id} className="each-item-details">
                  <div className="list-main-container">
                    <div className="name-letter-container">
                      <p className="name-letter">{eachItem.website[0]}</p>
                    </div>
                    <div className="details-container">
                      <p className="details website">{eachItem.website}</p>
                      <p className="details">{eachItem.username}</p>
                      {showPasswords ? (
                        <p className="details">{eachItem.password}</p>
                      ) : (
                        <img
                          className="stars"
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                          alt="stars"
                        />
                      )}
                    </div>
                    <div>
                      <button
                        data-testid="delete"
                        type="button"
                        onClick={() => deleteItem(eachItem.id)}
                        className="delete-button"
                      >
                        <img
                          className="delete-icon"
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                          alt="delete"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              </div>
            ))
        )}
      </ul>
    </div>
  )
}

export default PasswordsListContainer
