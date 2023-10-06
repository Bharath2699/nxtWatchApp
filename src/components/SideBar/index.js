import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {BiSave} from 'react-icons/bi'
import ThemeContext from '../../Context/ThemeContext'
import {
  SidebarContainer,
  CardContainer,
  TopContent,
  BottomContent,
  TopContents,
  Heading,
  BottomContents,
  ImageCard,
  Images,
  NavbarLink,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? 'black' : 'white'
      const topContentsColor = isDarkTheme ? '#d7dfe9' : ' #424242'
      const headingColor = isDarkTheme ? 'white' : ' #00306e'
      const fill = isDarkTheme ? 'white' : ' #616e7c'
      return (
        <SidebarContainer backgroundColor={backgroundColor}>
          <TopContent>
            <CardContainer>
              <NavbarLink className="nav-link active" to="/">
                <AiFillHome fill={fill} />
                <TopContents color={topContentsColor}>Home</TopContents>
              </NavbarLink>
            </CardContainer>
            <CardContainer>
              <NavbarLink className="nav-link" to="/trending">
                <ImFire fill={fill} />
                <TopContents color={topContentsColor}>Trending</TopContents>
              </NavbarLink>
            </CardContainer>
            <CardContainer>
              <NavbarLink className="nav-link" to="/gaming">
                <SiYoutubegaming fill={fill} />
                <TopContents color={topContentsColor}>Gaming</TopContents>
              </NavbarLink>
            </CardContainer>
            <CardContainer>
              <NavbarLink className="nav-link" to="/saved-videos">
                <BiSave fill={fill} />
                <TopContents color={topContentsColor}>Saved Videos</TopContents>
              </NavbarLink>
            </CardContainer>
          </TopContent>
          <BottomContent>
            <Heading color={headingColor}>CONTACT US</Heading>
            <ImageCard>
              <Images
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook"
              />
              <Images
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter"
              />
              <Images
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in"
              />
            </ImageCard>
            <BottomContents color={headingColor}>
              Enjoy! Now to see your <br />
              channels and <br /> recommendations!
            </BottomContents>
          </BottomContent>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default SideBar
