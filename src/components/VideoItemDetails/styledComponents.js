import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
  width: 100vw;
`
export const BottomCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 20px;
  font-family: Roboto;
`
export const Content = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 14px;
`
export const VideoFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LikesButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
`
export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 14px;
  align-items: center;
`
export const LikeContent = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: Roboto;
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
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ImageCard = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  margin-right: 16px;
`
export const Description = styled.h1`
  color: ${props => props.color};
  font-size: 20px;
  font-family: Roboto;
  margin-left: 40px;
`
