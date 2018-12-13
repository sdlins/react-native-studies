import React, { Component } from 'react'
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native'
import estilos from '../ViagensScreen/Viagem/estilos.js'

class ViagemScreen extends Component {
    renderLocal = ({item}) => {
        return (
            <View style={{
                flex: 1,
                marginBottom: 32
            }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.nome}</Text>
                <Text>{item.desc}</Text>
                <Text style={{position: 'absolute', right: 0, fontWeight: 'bold'}}>{item.preco}</Text>
            </View>
        )
    }
    static navigationOptions = {
        header: null,
    }
    render() {
        const viagem = {
            id: 1,
            nome: 'Trilha Sertaneja',
            preco: 'R$ 2500',
            locais: [
                { id: 1, nome: 'Serrado Brasiliense', desc: 'Hospedagem e alimentação', preco: 'R$ 1000', lat: 0, lng: 0 },
                { id: 2, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 3, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 4, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 5, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 6, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 7, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 8, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 9, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
                { id: 10, nome: 'Pirenópolis, GO', desc: 'Tranporte, hospedagem e camiseta personalizada da turma da mônica  ', preco: 'R$ 1500', lat: 0, lng: 0 },
            ]
        }
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('../../../assets/fundoViagem.png')}
                    style={{
                        height: 240,
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.goBack()}}
                        style={{
                            position: 'absolute',
                            top: 16,
                            left: 16
                        }}
                    >
                        <Image
                            source={require('../../../assets/seta-esq.png')}

                        />
                    </TouchableOpacity>
                    <Text style={estilos.nome}>{viagem.nome}</Text>
                    <Text style={estilos.valor}>{viagem.preco}</Text>
                </ImageBackground>
                <FlatList
                    data={viagem.locais}
                    renderItem={this.renderLocal}
                    keyExtractor={item=>item.id.toString()}
                    style={{
                        flex: 1,
                    }}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                    }}
                    h
                />
            </View>
        )
    }
}

export default ViagemScreen