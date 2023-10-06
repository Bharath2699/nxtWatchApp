import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  width: 60%;
  padding: 35px;
  border-radius: 7px;
  background-color: ${props => props.backgroundColor};
`
export const WebsiteImage = styled.img`
  height: 85px;
  width: 300px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 45px;
  width: 50%;
  flex-grow: 1;
`

export const CustomLabel = styled.label`
  color: ${props => props.color};
  font-size: 20px;
  font-family: Roboto;
  margin-bottom: 13px;
`
export const CardContainer = styled.div`
  margin: 19px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const InputCard = styled.input`
  height: 45px;
  width: 300px;
  font-size: 17px;
  border-color: white;
  background-color: transparent;
  border-color: ${props => props.color};
  color: ${props => props.color};
  padding: 8px 16px 8px 16px;
`
export const CheckBocCard = styled.div`
  display: flex;
`
export const CheckBoxInput = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 12px;
`

export const Button = styled.button`
  height: 35px;
  width: 200px;
  border-radius: 7px;
  background-color: blue;
  color: white;
  font-size: 15px;
  text-align: center;
  font-family: Roboto;
`

export const ErrorText = styled.p`
  colo: red;
  font-size: 10px;
  font-family: Roboto;
`
