import React from 'react'
import { View, Text, Dimensions} from 'react-native'
import estilos from './estilos'

const Viagem = props => {
    return (
        <View style={estilos.wrapper}>
            <View style={estilos.fundoViagem}>
                <Text style={estilos.textoViagem}>{props.destino}</Text>
                <Text style={estilos.valorViagem}>{props.preco}</Text>
            </View>
        </View>
    )
}

export default Viagem