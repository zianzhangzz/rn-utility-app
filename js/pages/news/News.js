import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import ArticleList from '../../components/ArticleList'
import { HEIGHT, WIDTH, getResponsiveHeight } from '../../common/styles'
import { Actions } from 'react-native-router-flux'
import { SCENE_SEARCH } from '../../constants/scene'
import Categories from './Categories'
import {  Content } from 'native-base'
import Header from '../../components/Header'
import { fetchTopNews, fetchFavNews } from '../../actions'
import { connect } from 'react-redux'

class News extends Component {

  state = {
    isLoading: false,
    site: 'bbc-news',
    siteName: 'Top News'
  }

  componentDidMount() {
    this.props.fetchTopNews(this.state.site);
  }


  changeSite = (name, apiName) => {
    let news =  this.props.fetchTopNews(apiName);
    this.setState({site: apiName, siteName: name});
  }
  onFav = () => {
    this.setState({siteName: 'Favorite'});
    
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.list}>
          <Header title={this.state.siteName} back={true} themeColor={this.props.themeColor} />
            <ArticleList
              articles={this.props.topNews}
              onEndReached={this.onEndReached}
              style={styles.article_list}
              isLoading={this.state.isLoading}
              onRefresh={this.fetchNews}
            />
          <Categories changeSite={this.changeSite} onFav={this.onFav} fetchFav={this.props.fetchFavNews}/>

          </View>
        </View>

    )
  }

}
const mapStateToProps = ({topNews}) => {
  return {topNews}
}

const mapDispatchToProps = {
  fetchTopNews,
  fetchFavNews
}
export default connect(mapStateToProps, mapDispatchToProps)(News);

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: 'column',
    backgroundColor: 'rgb(242,246,250)',
    alignItems: 'center',
    height: HEIGHT,
    
  },
  article_list: {
    // 一半的输入框高度加上maginBottom
    paddingTop: getResponsiveHeight(20)
  },
  
})
