import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Viagem from './Viagem'
import estilos from './estilos';

export default class ViagensScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const viagens = [
            { id: 1, nome: 'Trilha Sertaneja', precoTotal: 'R$ 3500' },
            { id: 2, nome: 'Festa Nordestina', precoTotal: 'R$ 4800' }
        ]

        renderizarViagem = ({item}) => {
            return <Viagem onPress={() => { this.props.navigation.navigate('Viagem')} } nome={item.nome} precoTotal={item.precoTotal} />
        }

        return (
            <View style={estilos.wrapper}>
                <View style={estilos.mapa}>
                    <Text>Mapa</Text>
                </View>
                <View>
                    <FlatList
                        data={viagens}
                        renderItem={renderizarViagem}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                    />
                </View>
            </View>
        )
    }
}
