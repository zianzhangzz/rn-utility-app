
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import * as scenes from '../constants/scene'
import { colorArrays } from '../constants/colors'
import Header from '../components/Header'
import Card from '../components/Card'

const CardList = [
    {title: 'Music', colors: colorArrays.pink},
    {title: 'Movies', colors: colorArrays.orange},
    {title: 'Videos', colors: colorArrays.teal},
    {title: 'Books', colors: colorArrays.blue}, 
    {title: 'News', colors: colorArrays.puple},
    {title: 'Numbers', colors: colorArrays.pink},
    {title: 'Gallery', colors: colorArrays.orange},
    {title: 'Timer', colors: colorArrays.teal}, 
  ]
export default class Home extends Component {

    renderCard() {
        return CardList.map(cardInfo => {
            return (
                <Card title={cardInfo.title} colors={cardInfo.colors}/>
            )
        }
        )
    }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {this.renderCard()}
            </ScrollView>
        </View>





    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

})
