import { createStackNavigator } from 'react-navigation-stack'
import { ListScreen, DetailScreen } from './'

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
