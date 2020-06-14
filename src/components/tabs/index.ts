import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    flex-direction : row;
    background-color : white;
`;

export const Button = styled.TouchableOpacity`
    flex : 1;
    height : ${ height * 0.1 }px;
    align-items : center;    
    justify-content : center;
`;

export const Title = styled.Text`
    color : ${ props => props.focused ? props.theme.primary : 'black'};
    font-weight : bold;
`
