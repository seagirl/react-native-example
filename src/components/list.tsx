import React, { Component, ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { getList, selectMember } from '../action'
import { MemberList } from '../entity'
import { ScreenProp } from './navigation'

interface Prop {
  getList: Function;
  selectMember: Function;
  members: MemberList[];
}

class ListScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: 'S2',
  }

  componentDidMount (): void {
    this.props.getList()
  }

  itemDidSelect (member: MemberList): void {
    this.props.selectMember(member)
    this.props.navigation.navigate('Detail')
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
              onPress={(): void => { this.itemDidSelect(member) }}
            />
          ))
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state): object => {
  return {
    members: state.members
  }
}

const mapDispatchToProps = { getList, selectMember }

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)