import React, { useState, useEffect } from 'react'
import { Container, Map, SearchContainer, Search, iconSize } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from 'react-native-maps';

interface Position {
    latitude : number
    longitude : number
    latitudeDelta : number
    longitudeDelta : number
}

const Main : React.FC = () => {

    const [ position, setPosition ] = useState<Position>({
        latitude : -23.5246292,
        longitudeDelta : 0.0014,
        latitudeDelta : 0.0014,
        longitude : -46.7545346
    } as Position)

    function GetUserPosition(){
        try{
            Geolocation.getCurrentPosition(resp => {
                const { latitude, longitude } = resp.coords
                setPosition({
                    longitude,
                    latitude,
                    longitudeDelta : 0.0014,
                    latitudeDelta : 0.0014
                })
            })
        }catch(e){
            Alert.alert('Por favor aceite a Geolocalização','Por favor libere a geolocatização')
        }
    }

    useEffect(() => {
        // GetUserPosition()
    },[])

    return (
        <Container>
            <Map
                showsMyLocationButton={false}
                showsUserLocation={false}
                initialRegion={position}
                region={position}
            >
                <Marker coordinate={position} />
                <Marker coordinate={{latitude: -23.5174775, longitude :-46.9335991}}/>
                <MapViewDirections
                    strokeWidth={7}
                    origin={{latitude: position.latitude, longitude: position.longitude}}
                    destination={{latitude: -23.5174775, longitude :-46.9335991}}
                    apikey={'AIzaSyDbjb-YiV2kz5Jio7PV-8ZHLgKEnbG04pI'}
                />
            </Map>
            <SearchContainer>
                <Search placeholderTextColor="white"  value='BR-374 - Jardim Itaquiti, Barueri - SP' placeholder='Trace sua rota' />
                <Icon name='microphone' color='#F3C442' size={iconSize} />
            </SearchContainer>
        </Container>
    )
}

export default Main