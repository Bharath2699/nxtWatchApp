import Popup from 'reactjs-popup'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'

const ReactPopup = props => {
  const {onLogout} = props
  const onClickLogout = () => {
    onLogout()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const style = isDarkTheme ? 'dark' : 'light'
        const closed = isDarkTheme ? 'light-button' : 'dark-button'
        const popContent =
          isDarkTheme === false ? 'dark-content' : 'light-content'
        const logout = isDarkTheme ? 'logout' : 'login'
        return (
          <div className={style}>
            <Popup
              modal
              trigger={
                <button type="button" className={logout}>
                  Logout
                </button>
              }
              position="top center"
            >
              {close => (
                <>
                  <div className={style}>
                    <p className={popContent}>
                      Are you sure you want to logout
                    </p>
                    <div className="buttons">
                      <button
                        type="button"
                        className={closed}
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        className="confirm"
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Popup>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default ReactPopup
