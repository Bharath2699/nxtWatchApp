import {BiSave} from 'react-icons/bi'
import NavBar from '../Navbar'
import SideBar from '../SideBar'
import SavedVideoItem from '../SavedVideoItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  FailureContainer,
  FailureContent,
  SidebarAndCard,
  FailureHeading,
  FailureImage,
  SavedVideosContainer,
  TopCard,
  ImgContainer,
  Heading,
  UnOrderList,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const backgroundColor = isDarkTheme ? ' #0f0f0f ' : '#f9f9f9 '
      const color = isDarkTheme ? 'white' : 'black'
      const topCardBackgroundColor = isDarkTheme ? '#313131' : ' #cccccc'
      const ImgContainerColor = isDarkTheme ? '#231f20' : '#cbd5e1'

      let isTrue
      if (savedVideosList.length === 0) {
        isTrue = false
      } else {
        isTrue = true
      }
      return (
        <>
          <NavBar />
          <SidebarAndCard>
            <SideBar />
            <SavedVideosContainer
              backgroundColor={backgroundColor}
              data-testid="savedVideos"
            >
              {isTrue && (
                <>
                  <TopCard backgroundColor={topCardBackgroundColor}>
                    <ImgContainer backgroundColor={ImgContainerColor}>
                      <BiSave size={35} fill="red" />
                    </ImgContainer>
                    <Heading>Saved Videos</Heading>
                  </TopCard>
                  <UnOrderList>
                    {savedVideosList.map(eachItem => (
                      <SavedVideoItem
                        videoDetails={eachItem}
                        key={eachItem.id}
                      />
                    ))}
                  </UnOrderList>
                </>
              )}
              {!isTrue && (
                <>
                  <FailureContainer>
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <FailureHeading color={color}>
                      No saved Videos Found
                    </FailureHeading>
                    <FailureContent color={color}>
                      You can save videos while watching them
                    </FailureContent>
                  </FailureContainer>
                </>
              )}
            </SavedVideosContainer>
          </SidebarAndCard>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default SavedVideos
