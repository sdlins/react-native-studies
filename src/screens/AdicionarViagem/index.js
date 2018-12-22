import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, AsyncStorage } from 'react-native'
import estilos from './estilos'

class AdicionarViagem extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        nome: '',
    }

    salvar = async() => {
        let viagens = []
        const novaViagem = {
            id: new Date().getTime(),
            nome: this.state.nome,
            preco: 0,
        }
        const viagensAS = await AsyncStorage.getItem('viagens')

        if (viagensAS) {
            viagens = JSON.parse(viagensAS)
        }

        viagens.push(novaViagem)
        await AsyncStorage.setItem('viagens', JSON.stringify(viagens))
        console.log('viagens', viagens)

        this.props.navigation.navigate('AdicionarLocal', { id: novaViagem.id })
    }

    render() {
        return (
            <View id='0908098098' style={estilos.wrapper}>
                <View style={{
                    flex: 0.5,
                    justifyContent: 'space-around'
                }}>
                    <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>Adicionar Viagem</Text>
                    <TextInput id='nome' placeholder='Nome' placeholderTextColor='white' style={estilos.input} onChangeText={texto => this.setState({nome: texto})} />
                    <TouchableHighlight id='btnSalvar' style={estilos.btnSalvar} onPress={this.salvar}>
                        <Text id='txtSalvar'>Salvar Viagem</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default AdicionarViagem