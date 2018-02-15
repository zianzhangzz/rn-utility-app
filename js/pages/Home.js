
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { colorArrays } from '../constants/colors'
import * as scenes from '../constants/scene'
import { Actions } from 'react-native-router-flux'

import Header from '../components/Header'
import Card from '../components/Card'

const CardList = [
    {title: 'Music', colors: colorArrays.pink, scene: scenes.SCENE_MUSIC},
    {title: 'Movies', colors: colorArrays.orange, scene: scenes.SCENE_MOVIE},
    {title: 'Videos', colors: colorArrays.teal, scene: scenes.SCENE_MUSIC},
    {title: 'Books', colors: colorArrays.blue, scene: scenes.SCENE_NEWS}, 
    {title: 'News', colors: colorArrays.puple, scene: scenes.SCENE_NEWS},
    {title: 'Numbers', colors: colorArrays.pink, scene: scenes.SCENE_NUMBERS},
    {title: 'Gallery', colors: colorArrays.orange, scene: scenes.SCENE_PICTURES},
    {title: 'Timer', colors: colorArrays.teal, scene: scenes.SCENE_TIMER}, 
  ]
export default class Home extends Component {
    onChangeScene = (scene, colors) => {
        let params = {themeColor: colors}
        Actions[scene](params)
      }
      onLink = (url) => {
        let params = { url: url }
        Actions[scenes.SCENE_WEB](params)
      }
    renderCard() {
        return CardList.map(cardInfo => {
            return (
                <Card title={cardInfo.title} colors={cardInfo.colors} onPress={()=>{this.onChangeScene(cardInfo.scene, cardInfo.colors)}}/>
            )
        }
        )
    }

  render() {
    return (
        <View style={styles.container} > 
            <Header title='Home' themeColor={colorArrays.blue}/> 
            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.innerContainer}>
                    {this.renderCard()}
                </View>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 20,
        flex: 1,
        backgroundColor: '#111522'
    },
    innerContainer: {
        paddingTop: 50,
        paddingHorizontal: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
})
