import { createStackNavigator } from 'react-navigation-stack'
import ListScreen from './list'
import DetailScreen from './detail'

export const MainNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Detail: {
      screen: DetailScreen,
    }
  }
)
