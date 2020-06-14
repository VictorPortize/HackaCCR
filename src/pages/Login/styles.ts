import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    flex : 1;
    background-color : ${props => props.theme.background};
    justify-content : center;
    align-items : center;
`;


export const Label = styled.Text`
    font-size : ${ height * 0.035}px;
    font-weight : bold;
    margin-top : 40px;
`

export const Input = styled.TextInput`
    background-color : ${props => props.theme.primary};
    color : white;
    width : 85%;
    border-radius : 20px;
    height : ${ height * 0.07 }px;
    border-width : 1px;
    font-size : ${ height * 0.03}px;
    padding-left : 15px;
    margin-top : 5px;
`

export const Button = styled(RectButton)`
    height : 60px;
    margin-top : 30px;
    border-radius : 30px;
    background-color : black;
    width : 80%;
    border-width : 1px;
    align-items: center;
    justify-content : center;
`

export const ButtonTitle = styled.Text`
    color : white;
    font-size : ${ height * 0.035}px;
    font-weight : bold;
`