import React, { Component, ReactNode } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { getData, setDataAndGetMemberList, setId, setPassword } from '../action/config'
import { ScreenProp } from './navigation'
import { styles, colors } from './style'

interface Prop {
  getData: Function;
  setDataAndGetMemberList: Function;
  setId: Function;
  setPassword: Function;
  id: string;
  password: string;
}

class ConfigScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: '設定',
  }

  componentDidMount (): void {
    this.props.getData()
  }

  render (): ReactNode {
    return (
      <View style={styles.containerConfig}>
        <Text style={styles.h4}>ベーシック認証</Text>
        <Input
          autoCompleteType='username'
          value={this.props.id}
          placeholder='ID'
          containerStyle={styles.inputContainer}
          onChangeText={(text): void => { this.props.setId(text) }}
        />
        <Input
          autoCompleteType='password'
          value={this.props.password}
          placeholder='PASSWORD'
          containerStyle={styles.inputContainer}
          secureTextEntry={true}
          onChangeText={(text): void => { this.props.setPassword(text) }}
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
            this.props.setDataAndGetMemberList(this.props.id, this.props.password)
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

const actionCreators = { getData, setDataAndGetMemberList, setId, setPassword }

export default connect(mapStateToProps, actionCreators)(ConfigScreen)