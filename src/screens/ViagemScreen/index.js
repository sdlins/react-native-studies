import React, { Component } from 'react'
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { default as estilosViagem } from '../ViagensScreen/Viagem/estilos.js'
import estilos from './estilos.js'

class ViagemScreen extends Component {
    renderLocal = ({item}) => {
        return (
            <View style={estilos.itemLista}>
                <Text style={estilos.nomeLocal}>{item.nome}</Text>
                <Text>{item.desc}</Text>
                <Text style={estilos.precoLocal}>{item.preco}</Text>
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
                    style={estilos.fundoImagem}
                >
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.goBack()}}
                        style={estilos.setaVoltar}
                    >
                        <Image source={require('../../../assets/seta-esq.png')} />
                    </TouchableOpacity>
                    <Text style={estilosViagem.nome}>{viagem.nome}</Text>
                    <Text style={estilosViagem.valor}>{viagem.preco}</Text>
                </ImageBackground>
                <FlatList
                    data={viagem.locais}
                    renderItem={this.renderLocal}
                    keyExtractor={item=>item.id.toString()}
                    style={estilos.lista}
                    contentContainerStyle={estilos.conteudoLista}
                />
            </View>
        )
    }
}

export default ViagemScreen