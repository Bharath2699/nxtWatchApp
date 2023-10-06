import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NavBar from '../Navbar'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'
import ThemeContext from '../../Context/ThemeContext'
import {
  FailureContainer,
  FailureButton,
  SidebarAndCard,
  FailureContent,
  FailureHeading,
  FailureImage,
  GamingContainer,
  TopCard,
  ImgContainer,
  Heading,
  UnOrderList,
} from './styledComponents'

const apiStatusOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideoList: [],
    isTrue: true,
    apiStatus: apiStatusOptions.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusOptions.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const Token = Cookie.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideoList: updatedData,
        apiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({apiStatus: apiStatusOptions.failure, isTrue: false})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoAssign = () => {
    const {gamingVideoList} = this.state
    return (
      <UnOrderList>
        {gamingVideoList.map(each => (
          <GamingVideoItem videoDetails={each} key={each.id} />
        ))}
      </UnOrderList>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const color = isDarkTheme ? 'white' : 'black'
        return (
          <FailureContainer>
            <FailureImage src={failureUrl} alt="failure view" />
            <FailureHeading color={color}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureContent color={color}>
              We are having some trouble to complete your request.Please try
              again.
            </FailureContent>
            <FailureButton type="button" onClick={this.getTrendingVideos()}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusOptions.success:
        return this.renderVideoAssign()
      case apiStatusOptions.failure:
        return this.renderFailureView()
      case apiStatusOptions.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {isTrue} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const topCardBackgroundColor = isDarkTheme ? '#313131' : ' #cccccc'
          const ImgContainerColor = isDarkTheme ? '#231f20' : '#cbd5e1'
          return (
            <>
              <NavBar />
              <SidebarAndCard>
                <SideBar />
                <GamingContainer
                  data-testid="gaming"
                  backgroundColor={backgroundColor}
                >
                  {isTrue ? (
                    <TopCard backgroundColor={topCardBackgroundColor}>
                      <ImgContainer backgroundColor={ImgContainerColor}>
                        <SiYoutubegaming size={35} fill="red" />
                      </ImgContainer>
                      <Heading>Gaming</Heading>
                    </TopCard>
                  ) : null}
                  <>{this.renderFinalView()}</>
                </GamingContainer>
              </SidebarAndCard>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
