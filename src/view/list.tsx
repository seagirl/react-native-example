import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../style'
import { ScreenProp } from './'

export class ListScreen extends Component<ScreenProp> {
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