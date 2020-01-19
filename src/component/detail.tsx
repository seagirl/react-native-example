import React, { Component, ReactNode } from 'react'
import { Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { getDetail, changeStatusAndGetList } from '../action/member'
import { Member } from '../entity'
import { ScreenProp } from './navigation'
import { styles, colors } from './style'

interface Prop {
  getDetail: Function;
  changeStatusAndGetList: Function;
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
          overlayContainerStyle={{backgroundColor: member.status ? member.color : colors.disabled.color }}
          activeOpacity={0.7}
          onPress={(): void => { this.props.changeStatusAndGetList(member) }}
        />
        <View style={styles.spacer} />
        <Text style={styles.label}>出社時間: { member.online || '--------' }</Text>
        <Text style={styles.label}>退社時間: { member.offline || '--------' }</Text>
        <View style={styles.spacer} />
        <Button
          title='色を変更する'
          buttonStyle={{ backgroundColor: colors.theme.color }}
          icon={{
            name: 'tint',
            type: 'font-awesome',
            size: 16,
            color: colors.icon.color
          }}
          onPress={(): void => { this.props.navigation.navigate('ColorPicker') }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state): object => {
  return {
    member: state.member.selected
  }
}

const actionCreators = { getDetail, changeStatusAndGetList }

export default connect(mapStateToProps, actionCreators)(DetailScreen)