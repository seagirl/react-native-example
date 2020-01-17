import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../style'
import { ScreenProp } from './'

export class ListScreen extends Component<ScreenProp> {
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