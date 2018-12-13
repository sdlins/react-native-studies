import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import ViagensScreen from './src/screens/ViagensScreen'
import ViagemScreen from './src/screens/ViagemScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Viagens: ViagensScreen,
  Viagem: ViagemScreen
},{ initialRouteName: 'Viagens' })

export default createAppContainer(AppNavigator)
