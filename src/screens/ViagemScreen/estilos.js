import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
    fundoImagem: {
        height: 240,
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    setaVoltar: {
        position: 'absolute',
        top: 16,
        left: 16
    },
    lista: {
        flex: 1,
    },
    conteudoLista: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    itemLista: {
        flex: 1,
        marginBottom: 32
    },
    nomeLocal: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    precoLocal: {
        position: 'absolute',
        right: 0,
        fontWeight: 'bold'
    },
})

export default estilos