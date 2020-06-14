import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const iconSize = height * 0.04

export const ScrollView = styled.ScrollView``

export const Container = styled.View`
    flex : 1;
`;

export const ContainerIcon = styled.TouchableOpacity`
    margin-left : 20px;
    margin-top : 20px;
    padding : 5px;
`

export const Avatar = styled.Image`
    width : ${ height * 0.2 }px;
    height : ${ height * 0.2 }px;
    margin-top : 20px;
    align-self : center;
    border-radius : ${ height * 0.1 }px;
    border-width : 3px;
    border-color : ${ props => props.theme.primary };
`

export const Label = styled.Text`
    font-size : ${ height * 0.025 };
    font-weight : bold;
    width : 85%;
    align-self : center;
    margin-top : 20px;
`

export const Input = styled.TextInput`
    width : 85%;
    margin-top : 5px;
    height : ${ height * 0.06 }px;
    padding-left : 15px;
    border-radius : ${ height * 0.03 }px;
    background-color : white;
    align-self : center;
    color : ${ props => props.theme.primary };
    elevation : 2;
    font-weight : bold;
    font-size : ${ height * 0.03}px;
`
