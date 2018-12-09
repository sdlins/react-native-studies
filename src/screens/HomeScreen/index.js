import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import estilso from './estilos'

class HomeScreen extends Component {
    state = {
        contador: 0
    }

    tratarContador = () => {
        this.setState({
            contador: ++this.state.contador
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
                <TouchableWithoutFeedback onPress={this.tratarContador}>
                    <View style={estilos.fundoBotao}>
                        <Text style={[estilos.textoBotao, estiloDoTexto]}>Começar! {this.state.contador} </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
}

export default HomeScreen