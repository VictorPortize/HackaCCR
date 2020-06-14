import React from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'

import { Container, Label, Input, Button, ButtonTitle } from './styles'

const Login : React.FC = () => {

    const { dispatch } = useNavigation()

    function handleChangeScreenMain(){
        dispatch(StackActions.replace('home',{
            route : 'Main'
        }))
    }

    return (
        <Container>
            <Label>Por favor, informe seu CPF:</Label>
            <Input placeholder={'Ex.: 123.456.789-00'} />
            <Label>E sua SENHA:</Label>
            <Input secureTextEntry placeholder={'Senha:'} />
            <Button onPress={handleChangeScreenMain} >
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>
        </Container>
    )
}

export default Login