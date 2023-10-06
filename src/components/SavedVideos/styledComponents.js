import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 35px;
  width: 100vw;
`
export const TopCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  padding: 35px;
  height: 60px;
`
export const SidebarAndCard = styled.div`
  display: flex;
`
export const ImgContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 23px;
  font-family: Roboto;
  margin-left: 16px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
  margin-top: 40px;
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

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
`
