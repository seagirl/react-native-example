import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import styles from '../style'
import { ScreenProp } from './'

export class DetailScreen extends Component<ScreenProp> {
  static navigationOptions = {
    title: 'プロフィール',
  }

  uploadButtonDidPress() {
    Alert.alert('まだ実装出来ていません')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>yoshizu</Text>
          <View style={styles.spacer} />
          <Avatar
            size="xlarge"
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            activeOpacity={0.7}
          />
          <View style={styles.spacer} />
          <Button
            icon={{name: 'arrow-up', type: 'octicon', color: '#fff'}}
            title='アイコン画像を登録する'
            buttonStyle={styles.button}
            raised
            onPress={this.uploadButtonDidPress}
          />
        </View>
      </View>
    )
  }
}