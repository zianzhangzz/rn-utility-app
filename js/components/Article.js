import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  INNERWIDTH,
  getResponsiveWidth,
  getResponsiveHeight
} from '../common/styles'
import { Actions } from 'react-native-router-flux'
import { SCENE_WEB } from '../constants/scene'
import { Button, Icon, Right } from 'native-base'
import { addNews } from '../api/firebase'
export default class Article extends Component {

  onPress = () => {
    let params = { url: this.props.data.url, source: this.props.data.source.name }
    Actions[SCENE_WEB](params)
  }

  render() {

    const article = this.props.data

    return (
        <View style={[styles.item, this.props.style]}>
          <TouchableOpacity onPress={this.onPress}>
            <Image
              style={styles.image}
              source={{ uri: article.urlToImage }}
            />
          </TouchableOpacity>
          <View style={styles.information}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.item_title} numberOfLines={2}>
              {article.title}
            </Text>
          </TouchableOpacity>
            <Text style={styles.item_author}>
              {article.author}
            </Text>
            <Text style={styles.item_publish}>
              {article.publishedAt}
              </Text>
          </View>
          <Button transparent onPress={() => addNews(article)}>
            <Icon style={styles.fav} name='md-heart' />
          </Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  fav: {
    color: 'lightgrey',
    paddingTop: getResponsiveHeight(135),
    transform : [{translateX : getResponsiveHeight(-30) }]
  },
  image: {
    height: getResponsiveHeight(100),
    width: getResponsiveWidth(100)
    // marginTop: 20
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,234)',
    paddingHorizontal: getResponsiveWidth(12),
    backgroundColor: 'white',
    width: INNERWIDTH,
    // height: 160
    paddingBottom: getResponsiveHeight(30),
    paddingTop: getResponsiveHeight(20),
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row'
  },
  information: {
    marginLeft: getResponsiveWidth(16),
    marginTop: getResponsiveHeight(-4)
  },
  item_title: {
    fontSize: 15,
    color: '#494949',
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    width: getResponsiveWidth(206)
  },
  item_author: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'PingFang SC',
    marginVertical: getResponsiveHeight(8)
  },
  item_publish: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'PingFang SC'
  },
  item_grade: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    color: '#FFB173',
    fontSize: 17,
    marginTop: getResponsiveHeight(14),
    flexDirection: 'row'
  },
  round: {
    position: 'absolute',
    top: getResponsiveHeight(62),
    right: getResponsiveWidth(12)
  }
})
