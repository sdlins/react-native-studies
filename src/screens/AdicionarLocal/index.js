import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, ToastAndroid } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import estilos from './estilos'

class AdicionarLocal extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        idViagem: 1545432973292,
        position: {
            latitude: -15.7941569,
            longitude: -47.8825289
        },
        nome: '',
        descricao: '',
        preco: 0
    }

    salvar = async () => {
        const idViagem = this.props.navigation.state.params.idViagem

        let locais = []
        const locaisAS = await AsyncStorage.getItem('viagem-' + idViagem)

        if (locaisAS) {
            locais = JSON.parse(locaisAS)
        }

        locais.push(this.state)
        await AsyncStorage.setItem('viagem-' + idViagem, JSON.stringify(locais))

        let total = 0
        locais.forEach( local => {
            total += local.preco
        })

        let viagens = []
        const viagensAS = await AsyncStorage.getItem('viagens')
        if (viagensAS) {
            viagens = JSON.parse(viagensAS)
        }
        viagens.forEach( viagem => {
            if (viagem.id === idViagem) {
                viagem.preco = total
            }
        })

        await AsyncStorage.setItem('viagens', JSON.stringify(viagens))

        ToastAndroid.show(
            'Local adicionado à viagem ' + idViagem + ' no valor de ' + this.state.preco + '. Total da viagem: ' + total, ToastAndroid.SHORT)

        console.log('locais', locais)
        console.log('viagens', viagens)

    }

    render() {
        return (
            <View id='0908098098' style={estilos.wrapper}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={estilos.wrapperMapa}
                    initialRegion={{
                        latitude: -15.7941569,
                        longitude: -47.8825289,
                        latitudeDelta: 0.06,
                        longitudeDelta: 0.06,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: -15.7941569,
                            longitude: -47.8825289,
                        }}
                        draggable
                        onDragEnd={
                            (e) => {
                                this.setState({
                                    position: e.nativeEvent.coordinate
                                })
                                console.log(e.nativeEvent)
                            }
                        }
                    />
                </MapView>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-around'
                }}>
                    <TextInput
                        id='nome'
                        placeholder='Nome'
                        placeholderTextColor='white'
                        style={estilos.input}
                        onChangeText={texto => this.setState({nome: texto})}

                    />
                    <TextInput
                        id='desc'
                        placeholder='Descrição'
                        placeholderTextColor='white'
                        style={estilos.input}
                        onChangeText={texto => this.setState({descricao: texto})}
                    />
                    <TextInput
                        id='prec'
                        placeholder='Preço'
                        placeholderTextColor='white'
                        style={estilos.input}
                        keyboardType='number-pad'
                        onChangeText={texto => this.setState({preco: parseFloat(texto)})}
                    />
                    <TouchableHighlight
                        id='btnSalvar'
                        style={estilos.btnSalvar}
                        onPress={this.salvar}
                    >
                        <Text id='txtSalvar'>Salvar Local</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default AdicionarLocal