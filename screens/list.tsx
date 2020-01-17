import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from '../style'
import { ScreenProps } from './'

export class ListScreen extends Component<ScreenProps> {
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