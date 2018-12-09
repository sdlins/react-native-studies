import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import estilos from './estilos'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        mostrar: true
    }

    tratarContador = () => {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }

    render() {
        const estiloDoTexto = this.state.contador % 2 === 0 ? { color: 'red' } : null
        return (
            <ImageBackground
                source={assets.fundo}
                imageStyle={{ resizeMode: 'stretch' }}
                style={estilos.fundo}
            >
                <View style={estilos.wrapperLogoCaixa}>
                    <Image source={assets.logoCaixa}/>
                </View>
                <View style={estilos.wrapperLogo}>
                    <Image source={assets.logo}/>
                </View>
                {
                    this.state.mostrar !== true ?
                        <TouchableWithoutFeedback onPress={this.tratarContador}>
                            <View style={estilos.botao}>
                                <Text style={[estilos.textoBotao, estiloDoTexto]}>Começar!</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    :
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ViagensScreen')}>
                            <View style={estilos.botao}>
                                <Image source={assets.pin} />
                                <Text style={[estilos.textoBotao, estiloDoTexto]}>Vamos planejar sua primeira viagem</Text>
                                <Image source={assets.setaDir} />
                            </View>
                        </TouchableWithoutFeedback>
                }
            </ImageBackground>
        )
    }
}

export default HomeScreen