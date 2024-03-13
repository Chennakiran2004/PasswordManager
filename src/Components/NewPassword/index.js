import './index.css'
import PasswordInput from '../PasswordInput'

const NewPassword = props => {
  const {
    username,
    website,
    password,
    onWebsiteChange,
    onUsernameChange,
    onPasswordChange,
    onAddNewDetails,
    websiteError,
    usernameError,
    passwordError,
  } = props

  return (
    <div className="create-password-container">
      <h3 className="add-new-password-heading">Add New Password</h3>
      <div className="input-elements-container">
        <PasswordInput
          imgSrc="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          altText="website"
          value={website}
          type="url"
          placeholder="Enter Website"
          onChange={onWebsiteChange}
          name="website"
          style={{maxWidth: '300px'}}
        />
        {websiteError && <div className="error-message">{websiteError}</div>}

        <PasswordInput
          imgSrc="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          altText="username"
          value={username}
          type="text"
          placeholder="Enter Username"
          onChange={onUsernameChange}
        />
        {usernameError && <div className="error-message">{usernameError}</div>}
        <PasswordInput
          imgSrc="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          altText="password"
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={onPasswordChange}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <div>
        <div className="add-button-container">
          <button
            onClick={onAddNewDetails}
            type="submit"
            className="add-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewPassword
