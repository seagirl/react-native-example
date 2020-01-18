import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack'
import ListScreen from './list'
import DetailScreen from './detail'

export interface ScreenProp {
  navigation: NavigationStackProp<{ userId: string }>;
}

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
