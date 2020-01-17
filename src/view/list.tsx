import React, { Component, ReactNode } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { ScreenProp } from './'

export class ListScreen extends Component<ScreenProp> {
  static navigationOptions = {
    title: 'S2',
  }

  list = [
    {
      name: 'yoshizu',
    },
    {
      name: 'hanai',
    },
    {
      name: 'kuriyama',
    },
    {
      name: 'umeta',
    },
  ]

  render (): ReactNode {
    return (
      <View>
        {
          this.list.map((l, i) => (
            <ListItem
              key={i}
              leftIcon={{name: 'user', type: 'font-awesome'}}
              title={l.name}
              bottomDivider
              chevron
              onPress={(): void => { this.props.navigation.navigate('Detail', { name: l.name }) }}
            />
          ))
        }
      </View>
    )
  }
}