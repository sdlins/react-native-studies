import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Viagem from './Viagem'
import estilos from './estilos'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

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
                <View style={estilos.wrapperMapa}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={estilos.mapa}
                        region={{
                            latitude: -15.7941569,
                            longitude: -47.8825289,
                            latitudeDelta: 0.06,
                            longitudeDelta: 0.06,
                        }}
                    >
                    </MapView>
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
