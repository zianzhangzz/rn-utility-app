import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Separator } from 'native-base'
import { HEIGHT, WIDTH } from '../common/styles'
import { Actions } from 'react-native-router-flux'
import * as scenes from '../constants/scene'

import Header from '../components/Header'

export default class Category extends Component {

    onChangeScene = () => {
        // let newScene = scene.category
        // Actions[newScene]
        Actions[scenes.SCENE_NUMBERS]()
      }
  render() {
    return (
        <Container>
          <Header title="Category" />
            <Content>
          <Separator bordered>
            <Text>AUDIO & VIDEO</Text>
          </Separator>
          <ListItem >
            <Text>Music</Text>
          </ListItem>
          <ListItem >
            <Text>Movies</Text>
          </ListItem>
          <ListItem last>
            <Text>Videos</Text>
          </ListItem>     

          <Separator bordered>
            <Text>INFORMATION & KNOWLEDGE</Text>
          </Separator>
          <ListItem >
            <Text>Books</Text>
          </ListItem>
          <ListItem last>
            <Text>News</Text>
          </ListItem>     

          <Separator bordered>
            <Text>TRAININGS</Text>
          </Separator>
          <ListItem onPress={this.onChangeScene}>
            <Text>Numbers</Text>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'rgb(242,246,250)',
    alignItems: 'center'
  },

})
