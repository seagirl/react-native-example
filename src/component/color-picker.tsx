import React, { Component, ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import { getList } from '../action/color'
import { changeColorAndGetDetail } from '../action/member'
import { Color, Member } from '../entity'
import { ScreenProp } from './navigation'
import { colors } from './style'

interface Prop {
  getList: Function;
  changeColorAndGetDetail: Function;
  colors: Color[];
  member: Member;
}

class ColorPickerScreen extends Component<ScreenProp & Prop> {
  static navigationOptions = {
    title: '色を変更する',
  }

  componentDidMount (): void {
    this.props.getList()
  }

  render (): ReactNode {
    return (
      <ScrollView>
        {
          this.props.colors.map((color, i) => (
            <ListItem
              key={i}
              containerStyle={{ backgroundColor: color.code }}
              title={color.code}
              titleStyle={{ color: colors.icon.color }}
              bottomDivider
              checkmark={this.props.member.color === color.code ? { color: colors.icon.color } : undefined}
              onPress={(): void => {
                this.props.changeColorAndGetDetail(this.props.member, color.id)
                this.props.navigation.goBack()
              }}
            />
          ))
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state): object => {
  return {
    colors: state.color.items,
    member: state.member.selected
  }
}

const actionCreators = { getList, changeColorAndGetDetail }

export default connect(mapStateToProps, actionCreators)(ColorPickerScreen)