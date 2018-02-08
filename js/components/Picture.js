import React, { Component } from 'react'
import { View, Image, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { Header, Body, Button, Left, Icon } from 'native-base';
import { addPic } from '../api/firebase'
import Gallery from 'react-native-image-gallery';


export default class Picture extends Component {
    // important props of a pic: urls,  updated_at, id, links
    // style={{height: 200, width: null, flex: 1, margin: 5}}
    state = {
      visible: false,
      isFav: this.props.isFav
    }
    onToggle = () => {
      this.setState({
        visible: !this.state.visible
      })
    }
    addFav = (pic) => {
      this.setState({
        isFav: !this.state.isFav
      })
      addPic(pic)
    }
  render() {
  return (
    <TouchableWithoutFeedback onPress={this.onToggle}>
      <View>
        <Image source={{uri: this.props.data.urls.small}} style={{height: 250, width: null, flex: 1, margin: 10, marginBottom: 0, transform : [{translateY : 0}] }}/>
          <Modal animationType = {"fade"} transparent = {false}
            visible = {this.state.visible}>
               <Header style={{backgroundColor: 'black', borderBottomColor: 'black'}}>
                <Left>
                <Button transparent onPress={this.onToggle}>
                  <Icon style={{color: 'grey', fontSize: 30}} name='ios-close' />
                </Button>
                </Left>
               </Header>
                  <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    images={[
                      { source: { uri: this.props.data.urls.regular } },
                    ]}
                    onSingleTapConfirmed={this.onToggle}
                  /> 
          </Modal>
          <TouchableWithoutFeedback onPress={() => this.addFav(this.props.data)}>
          {this.state.isFav ?
            <Icon style={{color: '#E91E63', opacity: 0.8, transform : [{translateY : -40 }, {translateX : 25 }]}} name='md-heart' />:
            <Icon style={{color: 'lightgrey', opacity: 0.8, transform : [{translateY : -40 }, {translateX : 25 }]}} name='md-heart' />
        }
          </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}


  