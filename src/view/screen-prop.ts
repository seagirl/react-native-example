import { NavigationStackProp } from 'react-navigation-stack'

export interface ScreenProp {
  navigation: NavigationStackProp<{ userId: string }>
}
