import { NavigationStackProp } from 'react-navigation-stack'

export interface ScreenProps {
  navigation: NavigationStackProp<{ userId: string }>
}
