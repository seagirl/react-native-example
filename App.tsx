import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Avatar, Button, Header } from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack'

interface ScreenProps {
  navigation: NavigationStackProp<{ userId: string }>
}

class ListScreen extends Component<ScreenProps> {
  static navigationOptions = {
    title: 'S2',
  }

  render() {
    return (
      <View style={styles.subContainer}>
        <Button
          title='yoshizu'
          buttonStyle={styles.button}
          raised
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    )
  }
}

class DetailScreen extends Component<ScreenProps> {
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

const MainNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Detail: {
      screen: DetailScreen,
    }
  },
  {
    initialRouteName: 'List',
  }
)

const App = createAppContainer(MainNavigator)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    backgroundColor: '#333',
    color: '#fff',
  },
  text: {
    color: '#333',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#333',
  },
  spacer: {
    height: 16
  }
})
