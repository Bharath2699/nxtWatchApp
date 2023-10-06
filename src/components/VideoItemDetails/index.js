import {Component} from 'react'
import Cookie from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {FiSave} from 'react-icons/fi'
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import {
  MainContainer,
  Heading,
  Content,
  VideoFeatures,
  LikesButton,
  LikeContent,
  Card,
  FailureContainer,
  FailureButton,
  FailureContent,
  FailureHeading,
  FailureImage,
  ProfileContainer,
  ImageCard,
  Description,
  BottomCard,
} from './styledComponents'

const apiStatusOptions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: [],
    isLike: false,
    isDisLike: false,
    apiStatus: apiStatusOptions.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        publishedDate: data.video_details.published_at,
      }

      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusOptions.success,
      })
    } else {
      this.setState({apiStatus: apiStatusOptions.failure})
    }
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

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

  onClickLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDisLike: !prevState.isDisLike,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDisLike: !prevState.isDisLike,
    }))
  }

  renderVideosDetailsView = () => {
    const {videoItemDetails, isLike, isDisLike} = this.state
    const {
      id,
      thumbnailUrl,
      title,
      videoUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedDate,
      description,
    } = videoItemDetails

    const date = formatDistanceToNow(new Date(publishedDate))
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, isSaved, onClickSavedVideo} = value
          const backgroundColor = isDarkTheme ? ' #0f0f0f ' : '#f9f9f9'
          const headingColor = isDarkTheme ? '#e2e8f0' : ' #1e293b'
          const contentColor = isDarkTheme ? ' #d7dfe9' : '#475569'
          const likeContentColor = isDarkTheme ? ' #ebebeb' : ' #00306e'
          const fill = isLike ? ' #3b82f6' : '#616e7c'
          const dislike = isDisLike === false ? '#616e7c' : '#3b82f6'

          const details = {
            id,
            title,
            thumbnailUrl,
            publishedDate,
            name,
            viewCount,
          }
          const onClickSavebutton = () => {
            onClickSavedVideo(details)
          }
          const savedColor = isSaved ? 'green' : null

          return (
            <>
              <Navbar />
              <BottomCard>
                <Sidebar />
                <MainContainer
                  backgroundColor={backgroundColor}
                  data-testid="videoItemDetails"
                >
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="90%"
                    height="60%"
                  />
                  <Heading color={headingColor}>{title}</Heading>

                  <VideoFeatures>
                    <Content color={contentColor}>
                      {viewCount} views . {date} ago
                    </Content>
                    <>
                      <Card>
                        <LikesButton type="button" onClick={this.onClickLike}>
                          <AiOutlineLike fill={fill} size={35} />
                        </LikesButton>
                        <LikeContent color={likeContentColor}>Like</LikeContent>
                      </Card>
                      <Card>
                        <LikesButton
                          type="button"
                          onClick={this.onClickDisLike}
                        >
                          <BiDislike fill={dislike} size={35} />
                        </LikesButton>
                        <LikeContent color={likeContentColor}>
                          Dislike
                        </LikeContent>
                      </Card>
                      <Card>
                        <LikesButton type="button" onClick={onClickSavebutton}>
                          <FiSave fill={fill} size={35} />
                        </LikesButton>
                        {!isSaved && (
                          <LikeContent color={likeContentColor}>
                            Save
                          </LikeContent>
                        )}
                        {isSaved && (
                          <LikeContent color={savedColor}>Saved</LikeContent>
                        )}
                      </Card>
                    </>
                  </VideoFeatures>

                  <hr />
                  <ProfileContainer>
                    <ImageCard src={profileImageUrl} alt="profile" />
                    <>
                      <Heading color={headingColor}>{name}</Heading>
                      <Content color={contentColor}>
                        {subscriberCount} subscribers
                      </Content>
                    </>
                  </ProfileContainer>
                  <Description color={headingColor}>{description}</Description>
                </MainContainer>
              </BottomCard>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusOptions.success:
        return this.renderVideosDetailsView()
      case apiStatusOptions.failure:
        return this.renderFailureView()
      case apiStatusOptions.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderFinalView()}</>
  }
}
export default VideoItemDetails
