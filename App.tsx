import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { ListScreen, DetailScreen } from './screens'

const MainNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Detail: {
      screen: DetailScreen,
    }
  },
  {
    initialRouteName: 'List',
  }
)

const App = createAppContainer(MainNavigator)

export default App
