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
                source={require('../../assets/fundo.png')}
                imageStyle={{ resizeMode: 'stretch' }}
                style={estilos.fundo}
            >
                <View style={estilos.wrapperLogoCaixa}>
                    <Image source={require('../../assets/logo-caixa.png')}/>
                </View>
                <View style={estilos.wrapperLogo}>
                    <Image source={require('../../assets/logo.png')}/>
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