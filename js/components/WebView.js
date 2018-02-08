import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import Header from './Header'

export default class MyWebView extends Component {


  render() {
    return (

            <View style={{flex: 1, paddingTop: 20}}>
                {/* <Header title="" back={true} /> */}
                <WebView
                    source={{uri: this.props.url}}
                    style={{flex: 1, }}
                />            
            </View>
    );
  }
}