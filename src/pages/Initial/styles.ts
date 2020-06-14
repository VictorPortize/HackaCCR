import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : #F3C442;
`;

export const Logo = styled.Image`
    width : 50%;
    height : 50%;
`; 