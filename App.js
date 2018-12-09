import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import ViagensScreen from './src/screens/ViagensScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Viagens: ViagensScreen
},{ initialRouteName: 'Viagens' })

export default createAppContainer(AppNavigator)
