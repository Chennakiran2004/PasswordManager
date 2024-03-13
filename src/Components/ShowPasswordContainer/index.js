const ShowPasswordContainer = props => {
  const {handleOnChangeCheckBox} = props
  return (
    <div className="show-password-container">
      <input
        type="checkbox"
        className="checkbox"
        id="showPassword"
        onChange={handleOnChangeCheckBox}
      />
      <label htmlFor="showPassword" className="show-password">
        Show Passwords
      </label>
    </div>
  )
}

export default ShowPasswordContainer
