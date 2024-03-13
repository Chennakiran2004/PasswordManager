import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import CreatePasswordHome from './Components/CreatePasswordHome'
import PasswordMainComponent from './Components/PasswordMainComponent'
import AppLogo from './Components/AppLogo'

const urlPattern = new RegExp(
  '(?:https?)://(\\w+:?\\w*)?(\\S+)(:\\d+)?(/|/([\\w#!:.?+=&%\\-/]))?',
)

class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    filteredList: [],
    showPasswords: false,
    searchWord: '',
    websiteError: '',
    usernameError: '',
    passwordError: '',
  }

  isPasswordValid = password => {
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasDigit = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)

    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    )
  }

  getWebsite = event => {
    this.setState({website: event.target.value, websiteError: ''})
  }

  getUsername = event => {
    this.setState({username: event.target.value, usernameError: ''})
  }

  getPassword = event => {
    this.setState({password: event.target.value, passwordError: ''})
  }

  addNewDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    let isError = false

    if (!urlPattern.test(website)) {
      this.setState({websiteError: 'Please enter a valid website'})
      console.log('hello')
      isError = true
    }

    if (!username) {
      this.setState({usernameError: 'Please enter a valid username'})
      isError = true
    }

    if (!this.isPasswordValid(password)) {
      this.setState({passwordError: 'Please enter a valid password'})
      isError = true
    }

    if (isError) {
      return
    }

    const newPassword = {website, username, password, id: uuidv4()}
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
      websiteError: '',
      usernameError: '',
      passwordError: '',
    }))
  }

  getSearchWord = event => {
    const {searchWord, passwordsList} = this.state

    this.setState({searchWord: event.target.value}, () => {
      const updatedList = passwordsList.filter(each =>
        each.username.toLowerCase().includes(searchWord.toLowerCase()),
      )

      console.log(('filteredList:', updatedList))

      this.setState({filteredList: updatedList})
    })
  }

  deleteItem = id => {
    const {passwordsList} = this.state
    const filtered = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: filtered})
  }

  handleOnChangeCheckBox = () => {
    const {showPasswords} = this.state
    this.setState({showPasswords: !showPasswords})
  }

  renderNewPassword = () => {
    const {
      website,
      username,
      password,
      websiteError,
      passwordError,
      usernameError,
    } = this.state
    return (
      <div className="add-new-password-container">
        <div className="add-new-password-sub-container">
          <CreatePasswordHome
            website={website}
            username={username}
            password={password}
            onAddNewDetails={this.addNewDetails}
            onWebsiteChange={this.getWebsite}
            onUsernameChange={this.getUsername}
            onPasswordChange={this.getPassword}
            websiteError={websiteError}
            usernameError={usernameError}
            passwordError={passwordError}
          />
        </div>
      </div>
    )
  }

  renderPasswordsList = () => {
    const {searchWord, passwordsList, filteredList, showPasswords} = this.state

    return (
      <div className="passwords-list-main-container">
        <div className="password-container-main-hading">
          <PasswordMainComponent
            searchWord={searchWord}
            getSearchWord={this.getSearchWord}
            handleOnChangeCheckBox={this.handleOnChangeCheckBox}
            passwordsList={passwordsList}
            filteredList={filteredList}
            showPasswords={showPasswords}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="cards-container">
            <AppLogo />
            {this.renderNewPassword()}
            {this.renderPasswordsList()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
