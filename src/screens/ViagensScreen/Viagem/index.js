import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import estilos from './estilos'

const Viagem = props => {
    return (
        <TouchableOpacity onPress={ props.onPress } style={estilos.wrapper}>
            <View style={estilos.fundoViagem}>
                <Text style={estilos.nome}>{props.nome}</Text>
                <Text style={estilos.valor}>{props.precoTotal}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Viagem