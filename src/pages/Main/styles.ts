import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import MapView, { MapViewProps } from 'react-native-maps';

const { height, width } = Dimensions.get(`window`)

export const iconSize = height * 0.025

export const Container = styled.View`
    flex : 1;
`;

export const Map = styled(MapView)`
    flex : 1;
`

export const SearchContainer = styled.View`
    position : absolute;
    width : 85%;
    background-color : ${ props => props.theme.primary };
    align-self : center;
    margin-top : 25px; 
    border-radius : 20px;
    flex-direction : row;
    align-items : center;
    justify-content : space-evenly;
`;

export const Search = styled.TextInput`
    width : 70%;
    height : 40px;
    color : white;
`;