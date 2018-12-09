import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Viagem from './Viagem'

export default class ViagensScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const viagens = [
            { id: 1, destino: 'Casa ABC', preco: 'R$ 350' },
            { id: 2, destino: 'Morro XYZ', preco: 'R$ 889' }
        ]

        renderizarViagem = ({item}) => {
            return <Viagem destino={item.destino} preco={item.preco} />
        }

        return (
            <View style={{
                flex: 1,
                justifyContent: 'space-between'
            }}>
                <View style={{
                    backgroundColor: 'red',
                    flex: 1
                }}>
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
