import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Image, AsyncStorage, ToastAndroid } from 'react-native'
import Viagem from './Viagem'
import estilos from './estilos'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

class ViagensScreen extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        viagens: [
            {
                id: 0,
                nome: 'Viagem Vazia',
                preco: 1
            },
            {
                id: 1,
                nome: 'Outra Viagem',
                preco: 2
            }
        ],
        idViagemAtual: null,
        somenteUmaViagemVisivel: true,
    }

    componentDidMount() {
        this.carregarViagens()
    }

    carregarViagens = async () => {
        let viagens = this.state.viagens
        // await AsyncStorage.clear()
        const viagensAS = await AsyncStorage.getItem('viagens')

        console.log(viagensAS)
        if (viagensAS != null) {
            console.log('d', viagensAS)
            this.setState( {viagens: JSON.parse(viagensAS)} )
        } else {
            await AsyncStorage.setItem('viagens', JSON.stringify(this.state.viagens))
        }
    }

    itemVisivel = ({viewableItems, changed}) => {
        this.setState({
            somenteUmaViagemVisivel: viewableItems.length == 1,
            idViagemAtual: viewableItems[0].item.id
        })
        ToastAndroid.show(changed[0].item.id + '', ToastAndroid.SHORT)
        console.log(viewableItems)
    }

    render() {
        renderizarViagem = ({item}) => {
            return <Viagem
                onPress={() => { this.props.navigation.navigate('Viagem')} }
                nome={item.nome}
                preco={item.preco} />
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
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                        }}
                        onPress={() => {
                            if (this.state.somenteUmaViagemVisivel) {
                                this.props.navigation.navigate('AdicionarLocal', { idViagem: this.state.idViagemAtual })
                            } else {
                                ToastAndroid.show("Escolha somente uma viagem.", ToastAndroid.SHORT)
                            }
                        }}
                    >
                        <Image source={require('../../../assets/adic-ponto.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={this.state.viagens}
                        renderItem={renderizarViagem}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        onViewableItemsChanged={this.itemVisivel}
                    />
                </View>
            </View>
        )
    }
}

export default ViagensScreen