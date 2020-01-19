import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack'
import ListScreen from './list'
import DetailScreen from './detail'
import ColorPickerScreen from './color-picker'
import ConfigScreen from './config'
import { colors } from './style'

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
    },
    ColorPicker: {
      screen: ColorPickerScreen,
    },
    Config: {
      screen: ConfigScreen,
    }
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerTintColor: colors.theme.color,
    },
  }
)
