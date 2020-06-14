import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get(`window`)

// Container, ContainerRow,
// Image, ContainerText,
// Name, Endereco, Telefone,
// ContainerPontos, Pontos 


export const Container = styled.View`
    flex : 1;
    background-color : white;
`;

export const ScrollView = styled.ScrollView``

export const ContainerRow = styled(RectButton)`
    flex-direction : row;
    align-items : center;
    padding : 10px 10px 10px;
    border-bottom-width : 1px;
    justify-content : space-between;
`

export const Image = styled.Image`
    width : ${ height * 0.12}px;
    height : ${ height * 0.12}px;
    border-width : 2px;
    border-color : ${ props => props.theme.primary};
    border-radius : ${ height * 0.075}px;
`

export const ContainerText = styled.View`
    padding-left : 10px;
    justify-content :  center;
`
export const Name = styled.Text`
    font-size : ${ height * 0.027}px;
    font-weight : bold;
`

export const Endereco = styled.Text``

export const Telefone = styled.Text`
    font-weight : bold;
`

export const ContainerPontos = styled.View`
    width : ${ height * 0.12}px;
    height : ${ height * 0.12}px;
    border-radius : ${ height * 0.075}px;
    background-color : ${ props => props.theme.background };
    align-items : center;
    justify-content : center;
`

export const Pontos = styled.Text`
    font-weight : bold;
    font-size : ${ height * 0.03}px
`