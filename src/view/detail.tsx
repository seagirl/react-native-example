import React, { Component, ReactNode } from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { MemberAPI, MemberDetail } from '../api/member'
import { styles, ScreenProp } from './'

export class DetailScreen extends Component<ScreenProp> {
  static navigationOptions = {
    title: 'プロフィール',
  }

  state = {
    data: {} as MemberDetail
  }

  componentDidMount (): void {
    MemberAPI.getDetail(this.props.navigation.state.params.name)
      .then((data) => {
        this.setState({ data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render (): ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{ this.state.data.name }</Text>
          <View style={styles.spacer} />
          <Avatar
            size="xlarge"
            rounded
            icon={{name: 'user', type: 'font-awesome', color: '#fff' }}
            overlayContainerStyle={{backgroundColor: this.state.data.color}}
            activeOpacity={0.7}
          />
          <View style={styles.spacer} />
          <Text style={styles.textSmall}>online: { this.state.data.online || '--------' }</Text>
          <Text style={styles.textSmall}>offline: { this.state.data.online || '--------' }</Text>
        </View>
      </View>
    )
  }
}