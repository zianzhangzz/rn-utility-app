import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ListView,
  RefreshControl
} from 'react-native'
import Article from './Article'
import { HEIGHT, INNERWIDTH, getResponsiveHeight } from '../common/styles'


const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

export default class ArticleList extends Component {

  renderRow(data) {
    return <Article data={data} />
  }

  onEndReached = async () => {
    this.props.onEndReached && this.props.onEndReached()
  }
  
  render() {

    const {
      articles,
      style,
      isLoading,
      onRefresh
    } = this.props

    const data = dataSource.cloneWithRows(articles)
    
    return (
      <View style={[styles.article_list, style]}>
        <ListView
          style={styles.list}
          onEndReached={this.onEndReached}
          dataSource={data}
          onEndReachedThreshold={100}
          renderRow={this.renderRow}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  article_list: {
    flex: 1,
    width: INNERWIDTH,
    paddingBottom: getResponsiveHeight(15),
    height: HEIGHT
  },
  list: {
    height: HEIGHT
  }
})
