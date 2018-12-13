import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

class ViagemScreen extends Component {
    renderLocal = ({item}) => {
        return (
            <View>
                <Text>{item.nome}</Text>
                <Text>{item.desc}</Text>
                <Text>{item.preco}</Text>
            </View>
        )
    }
    render() {
        const viagem = {
            id: 1,
            nome: 'Trilha Sertaneja',
            preco: 'R$ 2500',
            locais: [
                { id: 1, nome: 'Serrado Brasiliense', desc: 'Hospedagem e alimentação', preco: 1000, lat: 0, lng: 0 },
                { id: 2, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta', preco: 1500, lat: 0, lng: 0 }
            ]
        }
        return (
            <View>
                <View>
                    <Text>Header</Text>
                </View>
                <FlatList
                    data={viagem.locais}
                    renderItem={this.renderLocal}
                    keyExtractor={item=>item.id.toString()}
                />
            </View>
        )
    }
}

export default ViagemScreen