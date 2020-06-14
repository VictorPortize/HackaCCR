import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerIcon, Avatar, Label, Input, iconSize, ScrollView } from './styles'

const image = {
    uri : 'https://images.freeimages.com/images/large-previews/dec/matt-on-truck-1510177.jpg'
}

const Perfil : React.FC = () => {

    // const {  } = useNavigation()

    // function 

    return (
        <Container>
            <ScrollView>
                {/* <ContainerIcon>
                    <Icon name='arrow-left' size={iconSize} />
                </ContainerIcon> */}
                <Avatar source={image} />
                <Label>Nome:</Label>
                <Input placeholder='Nome:' editable={false} value={'ANTÔNIO JOSE DA SILVA'} />
                <Label>CPF:</Label>
                <Input placeholder='CPF:' editable={false} value={'069.874.872-25'} />
                <Label>Empresa:</Label>
                <Input placeholder='Empresa:' editable={false} value={'AMIGA DA ENTREGA'} />
                <Label>Pontos</Label>
                <Input placeholder='Pontos:' editable={false} value={'1250'} />
            </ScrollView>
        </Container>
    )
}

export default Perfil