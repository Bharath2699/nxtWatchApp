import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Login from './components/Login'
import TrendingVideos from './components/TrendingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './Context/ThemeContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, isSaved: false, savedVideosList: []}

  onClickToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickSavedVideo = videoItemDetails => {
    const {savedVideosList} = this.state
    const videoPresent = savedVideosList.find(
      each => each.id === videoItemDetails.id,
    )
    const filterVideos = savedVideosList.filter(
      each => each.id !== videoItemDetails.id,
    )

    if (videoPresent === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItemDetails],
      }))
    } else {
      this.setState({
        savedVideosList: filterVideos,
      })
    }
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {savedVideosList, isSaved, isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideosList,
          isSaved,
          onClickSavedVideo: this.onClickSavedVideo,
          onClickToggleTheme: this.onClickToggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
