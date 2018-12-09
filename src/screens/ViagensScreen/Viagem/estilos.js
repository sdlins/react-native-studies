import { StyleSheet, Dimensions } from 'react-native'

const dim = Dimensions.get('window')

const estilos = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    fundoViagem: {
        backgroundColor: 'green',
        width: dim.width - 32,
        height: 144,
        paddingBottom: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textoViagem: {
        textAlign: 'right',
        backgroundColor: '#FFBC0C',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    valorViagem: {
        textAlign: 'right',
        backgroundColor: '#FFBC0C',
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginLeft: 16
    }
})

export default estilos