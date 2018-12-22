import { createStackNavigator, createAppContainer } from 'react-navigation'
import { YellowBox } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import ViagensScreen from './src/screens/ViagensScreen'
import ViagemScreen from './src/screens/ViagemScreen'
import AdicionarViagem from './src/screens/AdicionarViagem'
import AdicionarLocal from './src/screens/AdicionarLocal'

YellowBox.ignoreWarnings(['Remote debugger', 'Require cycle:'])

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Viagens: ViagensScreen,
  Viagem: ViagemScreen,
  AdicionarViagem: AdicionarViagem,
  AdicionarLocal: AdicionarLocal,
},{ initialRouteName: 'Viagens' })

export default createAppContainer(AppNavigator)
