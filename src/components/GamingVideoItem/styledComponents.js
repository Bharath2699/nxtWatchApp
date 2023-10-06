import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 120px;
  margin: 15px;
  margin-bottom: 20px;
`
export const Image = styled.img`
  height: 200px;
  width: 100px;
  border-radius: 5px;
`
export const NavbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 18px;
  font-family: Roboto;
`

export const Content = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: Roboto;
`
