import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    wrapperLogo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32
    },
    wrapperLogoCaixa: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fundoBotao: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 18,
    }
})

const assets = {
    fundo: require('../../assets/fundo.png'),
    logoCaixa: require('../../assets/logo-caixa.png'),
    logo: require('../../assets/logo.png')
}

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