import React, { useState } from 'react'

import { 
    Container, ContainerRow,
    Image, ContainerText,
    Name, Endereco, Telefone,
    ContainerPontos, Pontos,
    ScrollView
} from './styles'

const images = {
    uri : "https://images.freeimages.com/images/large-previews/e80/metro-bus-1468254.jpg"
}

const Stops : React.FC = () => {

    const [ itens , setItens ] = useState<Array<string>>([
        '','','','','','','','a','','',''
    ])

    return (
        <Container>
            <ScrollView>
            {
                itens.map(( item, index)=> (
                    <ContainerRow key={index}>
                        <Image source={images} />
                        <ContainerText>
                            <Name>Restaurante Dorcas</Name>
                            <Endereco>Rodovia 451 Km 782</Endereco>
                            <Telefone>(31) 3591-4849</Telefone>
                        </ContainerText>
                        <ContainerPontos>
                            <Pontos>50</Pontos>
                            <Pontos>PTS</Pontos>
                        </ContainerPontos>
                    </ContainerRow>
                ))
            }
            </ScrollView>
        </Container>
    )
}

export default Stops