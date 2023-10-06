import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import VideoCard from '../VideoCard'
import ThemeContext from '../../Context/ThemeContext'
import {
  HomeContainer,
  BannerContainer,
  SidebarAndCard,
  WebsiteLogo,
  BannerHeading,
  BannerButton,
  BottomContainer,
  BannerCard,
  SearchContainer,
  SearchInput,
  SearchIcon,
  UnOrderList,
  FailureContainer,
  FailureButton,
  FailureContent,
  FailureHeading,
  FailureImage,
  CloseButton,
} from './styledComponents'

const apiStatusOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    isTrue: true,
    apiStatus: apiStatusOptions.initial,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusOptions.inProgress})
    const Token = Cookie.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: each.channel,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedDate: each.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({apiStatus: apiStatusOptions.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterInput = event => {
    if (event.key === 'Enter') {
      this.getVideosDetails()
    }
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideosDetails)
  }

  renderFailureView = () => {
    const isDarkTheme = false
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
          We are having some trouble to complete your request.Please try again.
        </FailureContent>
        <FailureButton type="button" onClick={this.getVideosDetails()}>
          Retry
        </FailureButton>
      </FailureContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderNoVideoView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : 'black'
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading color={color}>
              No Search results found
            </FailureHeading>
            <FailureContent color={color}>
              Try different key words or remove search filter
            </FailureContent>

            <FailureButton type="button" onClick={this.onClickRetry}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoView = () => {
    const {videosList} = this.state
    const isSearchVideoPresent = videosList.length === 0
    return isSearchVideoPresent === false ? (
      <UnOrderList>
        {videosList.map(each => (
          <VideoCard videos={each} key={each.id} />
        ))}
      </UnOrderList>
    ) : (
      <>{this.renderNoVideoView()}</>
    )
  }

  onClickCloseBanner = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  renderBannerView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const url = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <BannerContainer>
            <BannerCard>
              <WebsiteLogo src={url} alt="nxt watch logo" />
              <BannerHeading>
                Buy Nxt Watch Premium prepaid Plans with UPI
              </BannerHeading>
              <BannerButton data-testid="close" type="button">
                GET IT NOW
              </BannerButton>
            </BannerCard>
            <CloseButton type="button" onClick={this.onClickCloseBanner}>
              <AiOutlineClose size={25} />
            </CloseButton>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusOptions.success:
        return this.renderVideoView()
      case apiStatusOptions.failure:
        return this.renderFailureView()
      case apiStatusOptions.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, isTrue} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backgroundColor = isDarkTheme ? ' #181818 ' : ' #f9f9f9 '
          const color = isDarkTheme ? 'white' : 'black'
          return (
            <>
              <Navbar />
              <SidebarAndCard>
                <SideBar />
                <HomeContainer
                  data-testid="home"
                  backgroundColor={backgroundColor}
                >
                  {isTrue ? <>{this.renderBannerView()}</> : null}
                  <BottomContainer>
                    <SearchContainer color={color}>
                      <SearchInput
                        type="search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onEnterInput}
                        placeholder="Search"
                        color={color}
                      />
                      <SearchIcon
                        type="button"
                        onClick={this.getVideosDetails}
                        data-testid="searchButton"
                      >
                        <BiSearch size={20} />
                      </SearchIcon>
                    </SearchContainer>
                    {this.renderFinalView()}
                  </BottomContainer>
                </HomeContainer>
              </SidebarAndCard>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
