import NewPassword from '../NewPassword'
import PasswordImage from '../PasswordImage'

const CreatePasswordHome = props => {
  const {
    username,
    website,
    password,
    onWebsiteChange,
    onUsernameChange,
    onPasswordChange,
    onAddNewDetails,
    websiteError,
    passwordError,
    usernameError,
  } = props

  return (
    <>
      <NewPassword
        username={username}
        website={website}
        password={password}
        onWebsiteChange={onWebsiteChange}
        onUsernameChange={onUsernameChange}
        onPasswordChange={onPasswordChange}
        onAddNewDetails={onAddNewDetails}
        websiteError={websiteError}
        passwordError={passwordError}
        usernameError={usernameError}
      />
      <PasswordImage />
    </>
  )
}

export default CreatePasswordHome
