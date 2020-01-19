import React, { Component, ReactNode } from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { getList, selectMember, setRefreshing } from '../action/member'
import { Member } from '../entity'
import { ScreenProp } from './navigation'
import { styles, colors } from './style'

interface Prop {
  getList: Function;
  selectMember: Function;
  setRefreshing: Function;
  refreshing: boolean;
  members: Member[];
}

class ListScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: 'S2',
  }

  timer?: number

  componentDidMount (): void {
    this.props.getList()

    this.props.navigation.addListener('willFocus', () => {
      this.props.getList()
    })

    this.timer = setInterval(() => {
      this.props.getList()
    }, 1000 * 30)
  }

  componentWillUnmount (): void {
    clearInterval(this.timer)
  }

  itemDidSelect (member: Member): void {
    this.props.selectMember(member)
    this.props.navigation.navigate('Detail')
  }

  render (): ReactNode {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={(): void => {
              this.props.setRefreshing(true)
              this.props.getList()
            }}
          />
        }
      >
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
    refreshing: state.member.refreshing,
    members: state.member.items
  }
}

const actionCreators = { getList, selectMember, setRefreshing }

export default connect(mapStateToProps, actionCreators)(ListScreen)