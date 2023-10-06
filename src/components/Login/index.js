import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import {
  BgContainer,
  LoginContainer,
  WebsiteImage,
  CustomLabel,
  CardContainer,
  InputCard,
  CheckBocCard,
  CheckBoxInput,
  Button,
  ErrorText,
  FormContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    isShowPassword: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePasswordName = event => {
    this.setState({password: event.target.value})
  }

  onSuccessDetails = token => {
    const {history} = this.props
    Cookie.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onFailureDetails = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickShowMessage = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessDetails(data.jwt_token)
    } else {
      this.onFailureDetails(data.error_msg)
    }
  }

  render() {
    const {
      showErrorMsg,
      userName,
      password,
      isShowPassword,
      errorMsg,
    } = this.state
    const Token = Cookie.get('jwt_token')
    if (Token !== undefined) {
      return <Redirect to="/" />
    }

    const message = isShowPassword ? 'text' : 'password'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? 'white' : 'black'
          const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const url = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <BgContainer>
              <LoginContainer backgroundColor={backgroundColor}>
                <WebsiteImage src={url} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <CardContainer>
                    <CustomLabel color={color} htmlFor="username">
                      USERNAME
                    </CustomLabel>
                    <InputCard
                      type="text"
                      value={userName}
                      onChange={this.onChangeUserName}
                      id="username"
                      placeholder="Enter Username"
                      color={color}
                    />
                  </CardContainer>
                  <CardContainer>
                    <CustomLabel color={color} htmlFor="password">
                      PASSWORD
                    </CustomLabel>
                    <InputCard
                      type={message}
                      value={password}
                      onChange={this.onChangePasswordName}
                      id="password"
                      placeholder="Enter Password"
                      color={color}
                    />
                  </CardContainer>
                  <CheckBocCard>
                    <CheckBoxInput
                      type="checkbox"
                      id="check-box"
                      onChange={this.onClickShowMessage}
                    />
                    <CustomLabel color={color} htmlFor="check-box">
                      Show Password
                    </CustomLabel>
                  </CheckBocCard>
                  <Button type="submit">Login</Button>
                </FormContainer>
                {showErrorMsg && <ErrorText>{errorMsg}</ErrorText>}
              </LoginContainer>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
