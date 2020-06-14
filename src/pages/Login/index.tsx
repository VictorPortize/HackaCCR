import React, { useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'

import { Container, Label, Input, Button, ButtonTitle } from './styles'

const Login : React.FC = () => {

    const { dispatch } = useNavigation()

    function handleChangeScreenMain(){
        dispatch(StackActions.replace('home',{
            route : 'Main'
        }))
    }

    useEffect(() => {
        PermissionsAndroid.request('android.permission.ACCESS_COARSE_LOCATION')
        PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION')
    })

    return (
        <Container>
            <Label>Por favor, informe seu CPF:</Label>
            <Input placeholderTextColor="white" placeholder={'Ex.: 123.456.789-00'} />
            <Label>E sua SENHA:</Label>
            <Input placeholderTextColor="white" secureTextEntry placeholder={'Senha:'} />
            <Button onPress={handleChangeScreenMain} >
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>
        </Container>
    )
}

export default Login