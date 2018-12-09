import React from 'react'
import { View, Text, Dimensions} from 'react-native'
import estilos from './estilos'

const Viagem = props => {
    return (
        <View style={estilos.wrapper}>
            <View style={estilos.fundoViagem}>
                <Text style={estilos.textoViagem}>Serrado e Caatinga</Text>
                <Text style={estilos.valorViagem}>R$ 5000</Text>
            </View>
        </View>
    )
}

export default Viagem