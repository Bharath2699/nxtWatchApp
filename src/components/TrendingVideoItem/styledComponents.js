import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 130px;
  width: 80%;
  background-color: transparent;
  margin: 15px;
`
export const NavbarLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;
  height: 130px;
  width: 80%;
  background-color: transparent;
`

export const Image = styled.img`
  height: 100%;
  width: 40%;
  margin: 15px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 16px;
  font-family: Roboto;
`

export const Contents = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: Robot;
`
export const ContentsFlow = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 80%;
`
