import React, { Component, ReactNode } from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'
import { getDetail } from '../action'
import { MemberDetail } from '../entity'
import { ScreenProp } from './screen-prop'
import { styles } from './style'

interface Prop {
  getDetail: Function;
  member: MemberDetail;
}

const initialProps = {
  getDetail: getDetail,
  member: { name: '', color: '', status: true }
}

class DetailScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: 'プロフィール',
  }

  componentDidMount (): void {
    this.props.getDetail(this.props.navigation.state.params.name)
  }

  render (): ReactNode {
    const member = this.props.member
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{ member.name }</Text>
          <View style={styles.spacer} />
          <Avatar
            size="xlarge"
            rounded
            icon={{name: 'user', type: 'font-awesome', color: '#fff' }}
            overlayContainerStyle={{backgroundColor: member.color}}
            activeOpacity={0.7}
          />
          <View style={styles.spacer} />
          <Text style={styles.textSmall}>online: { member.online || '--------' }</Text>
          <Text style={styles.textSmall}>offline: { member.online || '--------' }</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps (state): object {
  return {
    member: state.selectedMember
  }
}

export default connect(mapStateToProps, initialProps)(DetailScreen)