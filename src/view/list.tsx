import React, { Component, ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MemberAPI } from '../api/member'
import { ScreenProp } from './'

export class ListScreen extends Component<ScreenProp> {
  static navigationOptions = {
    title: 'S2',
  }

  state = {
    data: []
  }

  componentDidMount (): void {
    MemberAPI.getList()
      .then((data) => {
        this.setState({ data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render (): ReactNode {
    return (
      <ScrollView>
        {
          this.state.data.map((l, i) => (
            <ListItem
              key={i}
              leftIcon={{name: 'user', type: 'font-awesome', color: l.color }}
              titleStyle={{ color: '#333' }}
              title={l.name}
              bottomDivider
              chevron
              badge={l.status ? { value: undefined, badgeStyle: { backgroundColor: 'blue' } } : undefined}
              onPress={(): void => { this.props.navigation.navigate('Detail', l) }}
            />
          ))
        }
      </ScrollView>
    )
  }
}