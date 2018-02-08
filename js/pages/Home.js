import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content, Text, Separator, Icon, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import * as scenes from '../constants/scene'
import colors from '../constants/colors'
import Header from '../components/Header'

const NGA = 'https://archive.nationalgeographic.com/dynamic/National%20Geographic%20Society/National%20Geographic/Landing.aspx'

export default class Home extends Component {

    onChangeScene = (scene) => {
        Actions[scene]()
      }
      onLink = (url) => {
        let params = { url: url }
        Actions[scenes.SCENE_WEB](params)
      }
  render() {
    return (
        <Container >
          {/* <Header title="Home" /> */}
          <Row size={1}/>
          <Row size={8}>
            <Col>
              <View style={styles.container}><Text>AUDIO & VIDEO</Text></View>
                <View style={styles.btnContainer}>
                  <Button onPress={() => {this.onChangeScene(scenes.SCENE_MUSIC)}} rounded style={{ margin: 5, backgroundColor: colors.red }}>
                    <Icon name="ios-musical-notes"  />
                    <Text>Music</Text>
                  </Button>
                  <Button rounded style={{ margin: 5, backgroundColor: colors.pink }}>
                    <Icon name="md-videocam"  />
                    <Text>Movies</Text>              
                  </Button>
                  <Button rounded style={{ margin: 5, backgroundColor: colors.purple }}>
                    <Icon name="md-play"  />
                    <Text>Videos</Text>
                  </Button>            
                </View>
                
                <View style={styles.container}><Text>INFORMATION & KNOWLEDGE</Text></View>
                <View style={styles.btnContainer}>

                    <Button rounded style={{ margin: 5, backgroundColor: colors.lightBlue }}>
                      <Icon name="ios-bookmarks"  />
                      <Text>Books</Text>              
                    </Button>
                    <Button onPress={() => {this.onChangeScene(scenes.SCENE_NEWS)}} rounded style={{ margin: 5, backgroundColor: colors.cyan }}>
                      <Icon name="md-paper"  />
                      <Text>News</Text>
                    </Button>
                    <Button onPress={() => {this.onLink(NGA)}} rounded style={{ margin: 5, backgroundColor: colors.teal }}>
                      <Icon name="md-globe"  />
                      <Text>NG Archive</Text>              
                    </Button>              
                </View>

                <View style={styles.container}><Text>LEISURE & TRAININGS</Text></View>
                <View style={styles.btnContainer}>
                    <Button onPress={() => {this.onChangeScene(scenes.SCENE_NUMBERS)}} rounded style={{ margin: 5, backgroundColor: colors.green }}>
                      <Icon name="ios-infinite"  />
                      <Text>Numbers</Text>              
                    </Button>  
                    <Button onPress={() => {this.onChangeScene(scenes.SCENE_PICTURES)}} rounded style={{ margin: 5, backgroundColor: colors.lightGreen }}>
                      <Icon name="md-images"  />
                      <Text>Gallery</Text>              
                    </Button>                      
                </View>    

                <View style={styles.container}><Text>TOOLS</Text></View>
                <View style={styles.btnContainer}>

                    <Button onPress={() => {this.onChangeScene(scenes.SCENE_TIMER)}} rounded style={{ margin: 5, backgroundColor: colors.amber }}>
                      <Icon name="md-timer"  />
                      <Text>Timer</Text>              
                    </Button>                      
                </View>  
            </Col>
          </Row>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,    
},

})
