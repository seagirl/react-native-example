import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack'
import styles from '../style'
import { ScreenProp } from './'

class ListScreen extends Component<ScreenProp> {
  static navigationOptions = {
    title: 'S2',
  }

  render (): object {
    return (
      <View style={styles.subContainer}>
        <Button
          title='yoshizu'
          buttonStyle={styles.button}
          raised
          onPress={(): void => { this.props.navigation.navigate('Detail') }}
        />
      </View>
    )
  }
}

class DetailScreen extends Component<ScreenProp> {
  static navigationOptions = {
    title: 'プロフィール',
  }

  uploadButtonDidPress (): void {
    Alert.alert('まだ実装出来ていません')
  }

  render (): object {
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
            onPress={(): void => { this.uploadButtonDidPress() }}
          />
        </View>
      </View>
    )
  }
}

export const MainNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Detail: {
      screen: DetailScreen,
    }
  }
)
