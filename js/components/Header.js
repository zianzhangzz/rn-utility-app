import React, { Component } from 'react';
import { Header, Body, Button, Left, Right, Text, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux'

export default class Headers extends Component {
  onBack = () => {
    Actions.pop()
}
  renderBack = () => {
    if (!this.props.back) return
    return (
      <Button transparent onPress={this.onBack}>
        <Icon name='arrow-back' />
      </Button>
    )
  }
  render() {
    return (
        <Header hasTabs={this.props.hasTabs}>
          <Left>
            {this.renderBack()}
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}