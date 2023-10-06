import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import ReactPopup from '../ReactPopup'
import ThemeContext from '../../Context/ThemeContext'

import {
  NavBarContainer,
  LogoImage,
  RightSideContents,
  ThemeButton,
  ProfileImage,
  ThemeImage,
} from './styledComponents'

const Navbar = props => {
  const onLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, onClickToggleTheme} = value
        const backgroundColor = isDarkTheme ? ' #475569' : ' #909090'
        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        const onClickTheme = () => {
          onClickToggleTheme()
        }
        return (
          <NavBarContainer backgroundColor={backgroundColor}>
            <LogoImage src={logoUrl} alt="website logo" />
            <RightSideContents>
              <ThemeButton type="button" onClick={onClickTheme}>
                <ThemeImage src={themeImage} alt="theme" />
              </ThemeButton>
              <ThemeButton type="button">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ThemeButton>
              <ReactPopup onLogout={onLogout} />
            </RightSideContents>
          </NavBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Navbar)
