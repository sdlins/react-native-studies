import {StyleSheet} from 'react-native'

const estilos = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    wrapperMapa: {
        flex: 1,
    },
    mapa: {
        ...StyleSheet.absoluteFillObject,
    },
    input: {
        marginHorizontal: 16,
        paddingHorizontal: 16,
        backgroundColor: '#0070AF',
        color: 'white',
    },
    btnSalvar: {
        height: 40,
        marginHorizontal: 16,
        backgroundColor: '#FFBC0C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSalvar: {
        color: '#0070AF',
    }
})

export default estilos
