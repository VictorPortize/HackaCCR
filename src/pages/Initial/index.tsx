import React, { useEffect } from 'react'
import { Container, Logo } from './styles'
import { StatusBar } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'


const Initial : React.FC = () => {

    const navigation = useNavigation()

    function changeScreenTiming(){
        setTimeout(() => {
            navigation.dispatch( StackActions.replace('login'))
        },2000)
    }

    useEffect(() => {
        changeScreenTiming()
    },[])

    return (
        <Container>
            <StatusBar translucent hidden />
            <Logo resizeMode={'contain'} source={require('../../assets/logo-vertical.png')} />
        </Container>
    )
}

export default Initial