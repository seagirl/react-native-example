import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Avatar, Button, Header } from 'react-native-elements'

export default class App extends Component<{}>  {
  uploadButtonDidPress() {
    Alert.alert('まだ実装出来ていません')
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          containerStyle={{ backgroundColor: '#333' }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'プロフィール', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.subContainer}>
          <Text style={styles.text}>Takuho Yoshizu</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
