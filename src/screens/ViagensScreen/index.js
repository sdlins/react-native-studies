import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Viagem from './Viagem'

export default class ViagensScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'space-between'
            }}>
                <View style={{
                    backgroundColor: 'red',
                    flex: 1
                }}>
                    <Text>Mapa</Text>
                </View>
                <Viagem />
            </View>
        )
    }
}
