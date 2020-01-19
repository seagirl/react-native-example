import React, { Component, ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { getList, selectMember } from '../action/member'
import { Member } from '../entity'
import { ScreenProp } from './navigation'
import { styles, colors } from './style'

interface Prop {
  getList: Function;
  selectMember: Function;
  members: Member[];
}

class ColorPickerScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: '色',
  }

  componentDidMount (): void {
    this.props.getList()
  }

  itemDidSelect (member: Member): void {
    this.props.selectMember(member)
    this.props.navigation.navigate('Detail')
  }

  render (): ReactNode {
    return (
      <ScrollView>
        {
          this.props.members.map((member, i) => (
            <ListItem
              key={i}
              leftIcon={{name: 'user', type: 'font-awesome', color: member.color }}
              titleStyle={styles.label}
              title={member.name}
              bottomDivider
              chevron
              badge={
                member.status
                  ? { value: 'オンライン', badgeStyle: { backgroundColor: colors.active.color } }
                  : { value: 'オフライン', badgeStyle: { backgroundColor: colors.disabled.color } }
              }
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
    members: state.member.items
  }
}

const actionCreators = { getList, selectMember }

export default connect(mapStateToProps, actionCreators)(ColorPickerScreen)