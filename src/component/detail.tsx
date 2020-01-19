import React, { Component, ReactNode } from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'
import { getDetail } from '../action/member'
import { Member } from '../entity'
import { ScreenProp } from './navigation'
import { styles, colors } from './style'

interface Prop {
  getDetail: Function;
  member: Member;
}

class DetailScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: '',
  }

  componentDidMount (): void {
    this.props.getDetail(this.props.member.name)
  }

  render (): ReactNode {
    const member = this.props.member
    return (
      <View style={styles.container}>
        <Text style={styles.h3}>{ member.name }</Text>
        <View style={styles.spacer} />
        <Avatar
          size="xlarge"
          rounded
          icon={{name: 'user', type: 'font-awesome', color: colors.icon.color }}
          overlayContainerStyle={{backgroundColor: member.status ? member.color : colors.disabled.color}}
          activeOpacity={0.7}
        />
        <View style={styles.spacer} />
        <Text style={styles.label}>出社時間: { member.online || '--------' }</Text>
        <Text style={styles.label}>退社時間: { member.offline || '--------' }</Text>
      </View>
    )
  }
}

const mapStateToProps = (state): object => {
  return {
    member: state.member.selected
  }
}

const actionCreators = { getDetail }

export default connect(mapStateToProps, actionCreators)(DetailScreen)