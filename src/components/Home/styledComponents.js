import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100vw;
`
export const SidebarAndCard = styled.div`
  display: flex;
  height: 100vh;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 25%;
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CloseButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  height: 70px;
  width: 100px;
`
export const BannerCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const WebsiteLogo = styled.img`
  height: 38px;
  width: 120px;
`

export const BannerHeading = styled.h1`
  color: black;
  font-size: 25px;
  font-family: Roboto;
`

export const BannerButton = styled.button`
  height: 35px;
  width: 100px;
  color: black;
  background-color: transparent;
  text-decoration: center;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
`

export const SearchContainer = styled.div`
  height: 30px;
  width: 250px;
  background-color: transparent;
  border-color: ${props => props.color};
  border-width: 2px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 450px;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 80%;
  background-color: transparent;
  outline: none;
  border-width: 0px;
  padding: 20px;
  color: ${props => props.color};
`

export const SearchIcon = styled.button`
  height: 30px;
  width: 20%;
  background-color: #cccccc;
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
`
export const FailureImage = styled.img`
  height: 100%;
  width: 60%;
`
export const FailureHeading = styled.h1`
color:${props => props.color}
font-size:20px;
font-family:Roboto;`

export const FailureContent = styled.p`
color:${props => props.color}
font-size:17px;
font-family:Roboto;
`
export const FailureButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #4f46e5;
  color: white;
  font-size: 13px;
  text-align: center;
  border-radius: 6px;
`
