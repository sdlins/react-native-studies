import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

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
        return (
            <ImageBackground
                source={require('../../assets/fundo.png')}
                imageStyle={{ resizeMode: 'stretch' }}
                style={{
                    flex: 1,
                    alignItems: 'stretch',
                    justifyContent: 'center',
                }}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={require('../../assets/logo-caixa.png')}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: 32
                }}>
                    <Image source={require('../../assets/logo.png')}/>
                </View>
                <TouchableWithoutFeedback onPress={this.tratarContador}>
                    <View style={{
                        backgroundColor: 'white',
                        paddingBottom: 16,
                        paddingTop: 16
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 18,
                        }}>Começar! {this.state.contador} </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
}

export default HomeScreen