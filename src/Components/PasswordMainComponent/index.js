import YourPasswordsContainer from '../YourPasswordsContainer'
import HorizontalLine from '../HorizontalLine'
import ShowPasswordContainer from '../ShowPasswordContainer'
import PasswordsListContainer from '../PasswordsListContainer'

const PasswordMainComponent = props => {
  const {
    searchWord,
    getSearchWord,
    passwordsList,
    filteredList,
    deleteItem,
    showPasswords,
    handleOnChangeCheckBox,
  } = props

  return (
    <>
      <YourPasswordsContainer
        searchWord={searchWord}
        getSearchWord={getSearchWord}
        passwordsList={passwordsList}
        filteredList={filteredList}
      />
      <HorizontalLine />
      <ShowPasswordContainer handleOnChangeCheckBox={handleOnChangeCheckBox} />
      <PasswordsListContainer
        filteredList={filteredList}
        passwordsList={passwordsList}
        searchWord={searchWord}
        deleteItem={deleteItem}
        showPasswords={showPasswords}
        onChange={handleOnChangeCheckBox}
      />
    </>
  )
}

export default PasswordMainComponent
