import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListCard = styled.li`
  list-style-type: none;
  margin: 15px;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 350px;
  background-color: transparent;
`
export const NavbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 290px;
  width: 320px;
`

export const VideoImage = styled.img`
  height: 220px;
  width: 300px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 6px;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 10px;
`

export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
color=${props => props.color};
font-size:12px;
font-family:Roboto;`

export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: 10px;
  font-family: Roboto;
`
