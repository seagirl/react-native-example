import React, { Component, ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { getList } from '../action/index'
import { ScreenProp } from './screen-prop'

class ListScreen extends Component<ScreenProp & { getList; members }> {
  static navigationOptions = {
    title: 'S2',
  }

  componentDidMount (): void {
    this.props.getList()
  }

  render (): ReactNode {
    const members = this.props.members || []
    return (
      <ScrollView>
        {
          members.map((member, i) => (
            <ListItem
              key={i}
              leftIcon={{name: 'user', type: 'font-awesome', color: member.color }}
              titleStyle={{ color: '#333' }}
              title={member.name}
              bottomDivider
              chevron
              badge={member.status ? { value: 'オンライン', badgeStyle: { backgroundColor: '#c33' } } : undefined}
              onPress={(): void => { this.props.navigation.navigate('Detail', member) }}
            />
          ))
        }
      </ScrollView>
    )
  }
}

function mapStateToProps (state): object {
  return {
    members: state.members
  }
}

export default connect(
  mapStateToProps,
  { getList }
)(ListScreen)