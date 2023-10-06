import styled from 'styled-components'

export const NavBarContainer = styled.div`
  height: 70px;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px;
`

export const LogoImage = styled.img`
  height: 40px;
  width: 100px;
`
export const RightSideContents = styled.div`
  display: flex;
  margin-left: 55px;
`
export const ThemeButton = styled.button`
  outline: none;
  border-width: 0px;
  background-color: transparent;
  margin: 20px;
  cursor: pointer;
`

export const ThemeImage = styled.img`
  height: 40px;
  width: 40px;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`

export const LogoutButton = styled.button`
  height: 35px;
  width: 90px;
  background-color: transparent;
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
  font-size: 19px;
  text-align: center;
`
