import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import Header from './Header'

export default class MyWebView extends Component {

  themeColor = ['#C3A5D9','#9F86C0','#8E649E']
  render() {
    return (
            <View style={{flex: 1}}>
                 <Header title={this.props.source} back={true} themeColor={this.themeColor}/>
                <WebView
                    source={{uri: this.props.url}}
                    style={{flex: 1, }}
                />            
            </View>
    );
  }
}