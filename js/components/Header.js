import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { Header, Body, Button, Left, Right, Text, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux'
import { LinearGradient } from 'expo';

export default class Headers extends Component {
  onBack = () => {
    Actions.pop()
}
  renderBack = () => {
    if (!this.props.back) return
    return (
      <Button transparent onPress={this.onBack}>
        <Icon name='arrow-back' style={{color: 'white'}} />
      </Button>
    )
  }
  render() {
    const {themeColor} = this.props

    return (
        <Header iosBarStyle='light-content' hasTabs={this.props.hasTabs} style={{backgroundColor: 'transparent'}}>
            <LinearGradient
              colors={themeColor}
              start={{x: 0.8, y: 0.2}} end={{x: 0.2, y: 1.0}} 
              style={styles.gradient}
              >
          </LinearGradient>
            <Left>
            {this.renderBack()}
          </Left>
          <Body>
            <Title style={styles.textContainer}>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
const styles = StyleSheet.create({

  gradient: {
    position: 'absolute',
      // paddingTop: 15,
      // marginTop: -15,
      height: 64,
      width:375,
      // alignItems: 'center',
      // justifyContent: 'center',
      opacity: 0.8,

  },
  textContainer: {
      // marginTop: -30,
      color: 'white',
  },

})
