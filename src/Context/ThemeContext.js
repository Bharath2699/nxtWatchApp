import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  isSaved: false,
  onClickSavedVideo: () => {},
  onClickToggleTheme: () => {},
})
export default ThemeContext
