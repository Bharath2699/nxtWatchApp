import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`
export const Image = styled.img`
  height: 50%;
  width: 60%;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 20px;
  font-family: Roboto;
`
export const Content = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: Roboto;
`
