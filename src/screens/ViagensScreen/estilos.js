import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    wrapperMapa: {
        flex: 1,
        backgroundColor: 'red',
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapa: {
        backgroundColor: 'red',
        ...StyleSheet.absoluteFillObject,
    },

})

export default estilos