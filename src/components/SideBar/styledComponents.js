import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  width: 30%;
  height: 100vh;
`
export const NavbarLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 5px;
`
export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
`
export const TopContents = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: Roboto;
  margin-left: 13px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 19px;
  font-family: Roboto;
`

export const BottomContents = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: Roboto;
`
export const Images = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px;
`
export const ImageCard = styled.div`
  display: flex;
`
