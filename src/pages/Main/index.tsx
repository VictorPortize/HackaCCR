import React, { useState, useEffect } from 'react'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location'
import { Container, Map, SearchContainer, Search, iconSize } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Position {
    latitude : number
    longitude : number
    latitudeDelta : number
    longitudeDelta : number
}

const Main : React.FC = () => {

    const [ position, setPosition ] = useState<Position>({
        latitude : 0,
        longitudeDelta : 20,
        latitudeDelta : 20,
        longitude : 0
    } as Position)

    function GetUserPosition(){
        Location.getCurrentPositionAsync().then(resp => {
            const { latitude, longitude } = resp.coords
            setPosition({
                longitude,
                latitude,
                longitudeDelta : 0.0014,
                latitudeDelta : 0.0014
            })
        })
    }

    useEffect(() => {
        Permissions.getAsync('location').then( resp => {
            if( resp.status == Permissions.PermissionStatus.GRANTED){
                GetUserPosition()
            }
        })
    },[])

    return (
        <Container>
            <Map
                showsMyLocationButton={false}
                showsUserLocation
                initialRegion={position}
                region={position}
            />
            <SearchContainer>
                <Search placeholder='Trace sua rota' />
                <Icon name='microphone' color='#F3C442' size={iconSize} />
            </SearchContainer>
        </Container>
    )
}

export default Main