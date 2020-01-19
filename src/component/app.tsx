import React, { Component, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { MainNavigator } from './navigation'
import store from '../store'

const Container = createAppContainer(MainNavigator)

export default class App extends Component {
  render (): ReactNode {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
