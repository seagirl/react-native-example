import React, { Component, ReactNode } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { getData, setDataAndGetMemberList } from '../action/config'
import { ScreenProp } from './navigation'
import { styles, colors } from './style'

interface Prop {
  getData: Function;
  setDataAndGetMemberList: Function;
  id: string;
  password: string;
}

class ConfigScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: '設定',
  }

  inputId = ''
  inputPassword = ''

  componentDidMount (): void {
    this.props.getData()
  }

  render (): ReactNode {
    this.inputId = this.props.id
    this.inputPassword = this.props.password

    return (
      <View style={styles.containerConfig}>
        <Text style={styles.h4}>ベーシック認証</Text>
        <Input
          value={this.props.id}
          placeholder='ID'
          containerStyle={styles.inputContainer}
          onChangeText={(text): void => { this.inputId = text }}
        />
        <Input
          value={this.props.password}
          placeholder='PASSWORD'
          containerStyle={styles.inputContainer}
          secureTextEntry={true}
          onChangeText={(text): void => { this.inputPassword = text }}
        />
        <View style={{ height: 24 }} />
        <Button
          title='保存する'
          buttonStyle={{ backgroundColor: colors.theme.color }}
          icon={{
            name: 'save',
            type: 'font-awesome',
            size: 16,
            color: colors.icon.color
          }}
          onPress={(): void => {
            this.props.setDataAndGetMemberList(this.inputId, this.inputPassword)
            this.props.navigation.goBack()
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state): object => {
  return {
    id: state.config.id,
    password: state.config.password,
  }
}

const actionCreators = { getData, setDataAndGetMemberList }

export default connect(mapStateToProps, actionCreators)(ConfigScreen)